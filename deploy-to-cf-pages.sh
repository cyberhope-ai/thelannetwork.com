#!/usr/bin/env bash
# TLN — Cloudflare Pages deploy + DNS cutover
# Run this AFTER the Pages project "thelannetwork-com" exists in the CF dashboard.
# Prereq: source ~/.pcos-secrets/cloudflare.env

set -euo pipefail

source ~/.pcos-secrets/cloudflare.env

PROJECT="thelannetwork-com"
ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID}"
ZONE_ID="${TLN_ZONE_ID}"
TOKEN="${CLOUDFLARE_API_TOKEN}"

echo "=== Step 1: deploy static build to Cloudflare Pages ==="
cd "$(dirname "$0")"
wrangler pages deploy out/ --project-name "${PROJECT}" --branch main --commit-dirty=true

echo ""
echo "=== Step 2: attach custom domains ==="
for DOMAIN in "thelannetwork.com" "www.thelannetwork.com"; do
  echo "Attaching ${DOMAIN}..."
  curl -s -X POST \
    "https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT}/domains" \
    -H "Authorization: Bearer ${TOKEN}" \
    -H "Content-Type: application/json" \
    -d "{\"name\":\"${DOMAIN}\"}" | python3 -c "
import json,sys
d=json.load(sys.stdin)
print('  success:', d.get('success'), 'errors:', d.get('errors',[]))
"
done

echo ""
echo "=== Step 3: delete legacy A records (185.25.50.x) ==="
for REC_ID in "5be9f116879026b0a5bbc97e77762e3d" "6cad959a04f714356f50103f6b2fe042"; do
  echo "Deleting DNS record ${REC_ID}..."
  curl -s -X DELETE \
    "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records/${REC_ID}" \
    -H "Authorization: Bearer ${TOKEN}" | python3 -c "
import json,sys
d=json.load(sys.stdin)
print('  deleted:', d.get('result',{}).get('id','?'), 'success:', d.get('success'))
"
done

echo ""
echo "=== Step 4: verify Pages project ==="
curl -s \
  "https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT}" \
  -H "Authorization: Bearer ${TOKEN}" | python3 -c "
import json,sys
d=json.load(sys.stdin)
r=d.get('result',{})
print('Project:', r.get('name'))
print('Subdomain:', r.get('subdomain'))
print('Domains:', [x.get('name') for x in r.get('domains',[])])
print('Latest deployment:', r.get('latest_deployment',{}).get('url','none'))
"

echo ""
echo "=== DONE — thelannetwork.com should be live on Cloudflare Pages ==="
echo "Preview URL: https://${PROJECT}.pages.dev"
echo "Production:  https://thelannetwork.com"
