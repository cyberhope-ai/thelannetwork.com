export type CriticalityClass = "C0" | "C1" | "C2" | "C3" | "C4" | "C5";

export type PcosIdPrefix = "QTK" | "EVT" | "MTR";

export interface QToken {
  token_id: string;
  layer: number;
  payload_hash: string;
  project_id: string;
  customer_id: string;
  criticality: CriticalityClass;
  created_at: string;
  metadata: Record<string, unknown>;
}

export interface EvidenceTicket {
  ticket_id: string;
  qtoken_id: string;
  agent_id: string;
  quality_score: number;
  signature: string;
  is_sealed: boolean;
  timestamp: string;
}

export interface MeterEvent {
  event_id: string;
  meter_id: string;
  ticket_id: string;
  project_id: string;
  customer_id: string;
  raw_units: number;
  governance_weights: number[];
  criticality_multiplier: number;
  total_credits: number;
}

export interface QTokenInput {
  token_id?: string;
  layer: number;
  payload_hash: string;
  project_id: string;
  customer_id: string;
  criticality?: CriticalityClass;
  created_at?: string;
  metadata?: Record<string, unknown>;
}

export interface EvidenceTicketInput {
  ticket_id?: string;
  qtoken_id: string;
  agent_id: string;
  quality_score?: number;
  signature: string;
  is_sealed?: boolean;
  timestamp?: string;
}

export interface MeterEventInput {
  event_id?: string;
  meter_id: string;
  ticket_id: string;
  project_id: string;
  customer_id: string;
  raw_units?: number;
  governance_weights?: number[];
  criticality_multiplier?: number;
}

export interface ProofOfRevenueResult {
  qtoken: QToken;
  evidence: EvidenceTicket;
  meter: MeterEvent;
  final_credits: string;
}

export const CRITICALITY_MULTIPLIERS: Record<CriticalityClass, number> = {
  C0: 0.25,
  C1: 1.0,
  C2: 1.5,
  C3: 2.5,
  C4: 4.0,
  C5: 10.0,
};

export const LAYER_WEIGHTS = {
  L4_RECEIPT: 1.0,
  L5_TRON: 5.0,
  L6_GENIE: 0.35,
  L10_TRI_AUDIT: 75.0,
} as const;

export type LayerWeightKey = keyof typeof LAYER_WEIGHTS;

export const GENIE_SESSION_GOVERNANCE_WEIGHTS = [
  LAYER_WEIGHTS.L6_GENIE,
  LAYER_WEIGHTS.L5_TRON,
  LAYER_WEIGHTS.L10_TRI_AUDIT,
];

export const EMS_INCIDENT_441_SHA256 = "414186c9f763dd219ae69378f31bcd9bf1d30afd24e57b4d0d32b05960b41021";

function makeId(prefix: PcosIdPrefix): string {
  const bytes = new Uint8Array(4);
  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }
  const suffix = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  return `${prefix}-${suffix}`;
}

function assertIdFormat(value: string, prefix: PcosIdPrefix): void {
  if (!new RegExp(`^${prefix}-[0-9a-f]{8}$`).test(value)) {
    throw new Error(`${prefix} id must match ${prefix}-<8 lowercase hex>: ${value}`);
  }
}

function assertRange(name: string, value: number, min: number, max: number): void {
  if (!Number.isFinite(value) || value < min || value > max) {
    throw new Error(`${name} must be between ${min} and ${max}: ${value}`);
  }
}

function assertRequiredString(name: string, value: string): void {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${name} is required`);
  }
}

export function calculateMeterCredits(
  rawUnits: number,
  governanceWeights: number[],
  criticalityMultiplier: number,
): number {
  return rawUnits * governanceWeights.reduce((total, weight) => total + weight, 0) * criticalityMultiplier;
}

export function createQToken(input: QTokenInput): QToken {
  const token: QToken = {
    token_id: input.token_id ?? makeId("QTK"),
    layer: input.layer,
    payload_hash: input.payload_hash,
    project_id: input.project_id,
    customer_id: input.customer_id,
    criticality: input.criticality ?? "C1",
    created_at: input.created_at ?? new Date().toISOString(),
    metadata: input.metadata ?? {},
  };

  assertIdFormat(token.token_id, "QTK");
  assertRange("layer", token.layer, 0, 10);
  return token;
}

export function createEvidenceTicket(input: EvidenceTicketInput): EvidenceTicket {
  const ticket: EvidenceTicket = {
    ticket_id: input.ticket_id ?? makeId("EVT"),
    qtoken_id: input.qtoken_id,
    agent_id: input.agent_id,
    quality_score: input.quality_score ?? 0,
    signature: input.signature,
    is_sealed: input.is_sealed ?? false,
    timestamp: input.timestamp ?? new Date().toISOString(),
  };

  assertIdFormat(ticket.ticket_id, "EVT");
  assertIdFormat(ticket.qtoken_id, "QTK");
  assertRange("quality_score", ticket.quality_score, 0, 100);
  return ticket;
}

export function createMeterEvent(input: MeterEventInput): MeterEvent {
  const rawUnits = input.raw_units ?? 1.0;
  const governanceWeights = input.governance_weights ?? [1.0];
  const criticalityMultiplier = input.criticality_multiplier ?? 1.0;
  const event: MeterEvent = {
    event_id: input.event_id ?? makeId("MTR"),
    meter_id: input.meter_id,
    ticket_id: input.ticket_id,
    project_id: input.project_id,
    customer_id: input.customer_id,
    raw_units: rawUnits,
    governance_weights: governanceWeights,
    criticality_multiplier: criticalityMultiplier,
    total_credits: calculateMeterCredits(rawUnits, governanceWeights, criticalityMultiplier),
  };

  assertIdFormat(event.event_id, "MTR");
  assertIdFormat(event.ticket_id, "EVT");
  assertRequiredString("customer_id", event.customer_id);
  event.governance_weights.forEach((weight) => assertRange("governance_weight", weight, 0, Number.MAX_SAFE_INTEGER));
  return event;
}

export function runProofOfRevenue(): ProofOfRevenueResult {
  const qtoken = createQToken({
    token_id: "QTK-9d56aa33",
    layer: 6,
    payload_hash: EMS_INCIDENT_441_SHA256,
    project_id: "PROJ-EMS-SWAN",
    customer_id: "CUST-TRAUMASOFT-01",
    criticality: "C4",
  });

  const evidence = createEvidenceTicket({
    ticket_id: "EVT-6658e68a",
    qtoken_id: qtoken.token_id,
    agent_id: "avatarai-claude",
    quality_score: 95,
    signature: "SIG-c8391c2163670be5",
    is_sealed: true,
  });

  const meter = createMeterEvent({
    event_id: "MTR-96ae7c4f",
    meter_id: "GENIE-SESSION",
    ticket_id: evidence.ticket_id,
    project_id: qtoken.project_id,
    customer_id: qtoken.customer_id,
    raw_units: 1.0,
    governance_weights: GENIE_SESSION_GOVERNANCE_WEIGHTS,
    criticality_multiplier: CRITICALITY_MULTIPLIERS[qtoken.criticality],
  });

  return {
    qtoken,
    evidence,
    meter,
    final_credits: meter.total_credits.toFixed(4),
  };
}
