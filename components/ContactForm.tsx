"use client";
import { useState } from "react";

const projectTypes = [
  "AI Technology Development",
  "AI Automation",
  "Cybersecurity",
  "Apprenticeships / Training",
  "Esports / Digital Operations",
  "Partnership",
  "Other",
];
const budgets = ["Under $5K", "$5K–$15K", "$15K–$50K", "$50K+", "Not sure yet"];
const timelines = ["Immediately", "30 days", "60–90 days", "Exploratory"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/rick@thelannetwork.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-2 border-tln-red rounded-lg p-10 text-center">
        <p className="text-tln-red font-display text-4xl mb-3">Message Sent</p>
        <p className="text-tln-text/80 font-medium leading-relaxed">
          A human from TLN will review your request and be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Formsubmit config */}
      <input type="hidden" name="_subject" value="New TLN Project Inquiry" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Name *</label>
          <input type="text" name="name" required placeholder="Your full name"
            className="w-full bg-tln-ink border-2 border-tln-line rounded px-4 py-3 text-tln-text font-medium focus:border-tln-red outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Email *</label>
          <input type="email" name="email" required placeholder="your@email.com"
            className="w-full bg-tln-ink border-2 border-tln-line rounded px-4 py-3 text-tln-text font-medium focus:border-tln-red outline-none transition-colors" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Organization</label>
          <input type="text" name="organization" placeholder="Company or organization"
            className="w-full bg-tln-ink border-2 border-tln-line rounded px-4 py-3 text-tln-text font-medium focus:border-tln-red outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Your Role</label>
          <input type="text" name="role" placeholder="Founder, Director, etc."
            className="w-full bg-tln-ink border-2 border-tln-line rounded px-4 py-3 text-tln-text font-medium focus:border-tln-red outline-none transition-colors" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Project Type</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {projectTypes.map(t => (
            <label key={t} className="flex items-center gap-2 cursor-pointer border border-tln-line rounded px-3 py-2 hover:border-tln-red transition-colors">
              <input type="checkbox" name="project_type" value={t} className="accent-red-500" />
              <span className="text-sm font-medium text-tln-text/85">{t}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Budget Range</label>
          <select name="budget" className="w-full bg-tln-ink border-2 border-tln-line rounded px-4 py-3 text-tln-text font-medium focus:border-tln-red outline-none transition-colors">
            <option value="">Select a range</option>
            {budgets.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Timeline</label>
          <select name="timeline" className="w-full bg-tln-ink border-2 border-tln-line rounded px-4 py-3 text-tln-text font-medium focus:border-tln-red outline-none transition-colors">
            <option value="">Select a timeline</option>
            {timelines.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Tell Us About Your Project *</label>
        <textarea name="message" required rows={5}
          placeholder="Describe what you are trying to build, automate, secure, or teach."
          className="w-full bg-tln-ink border-2 border-tln-line rounded px-4 py-3 text-tln-text font-medium focus:border-tln-red outline-none transition-colors resize-none" />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm font-medium">Something went wrong — please email rick@thelannetwork.com directly.</p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="w-full px-6 py-4 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm hover:opacity-90 transition disabled:opacity-50">
        {status === "sending" ? "Sending…" : "Submit Project Request →"}
      </button>

      <p className="text-tln-muted text-xs text-center">
        After you submit, a human from TLN will review your request. If there is a fit, we will schedule an intake call.
      </p>
    </form>
  );
}
