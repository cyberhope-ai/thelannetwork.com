import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project | The LAN Network",
  description: "Tell us what you are trying to build, automate, secure, or teach. A human from TLN will review your request.",
};

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

export default function StartAProject() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Get Started</p>
        <h1 className="text-5xl md:text-6xl mb-6">Start a Project With TLN</h1>
        <p className="text-xl text-tln-text/90 font-medium max-w-2xl leading-relaxed">
          Tell us what you are trying to build, automate, secure, or teach.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <form className="space-y-6" action="mailto:rick@thelannetwork.com" method="get">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Name *</label>
              <input
                type="text" name="name" required
                className="w-full bg-tln-ink border-2 border-tln-line rounded px-4 py-3 text-tln-text font-medium focus:border-tln-red outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Email *</label>
              <input
                type="email" name="email" required
                className="w-full bg-tln-ink border-2 border-tln-line rounded px-4 py-3 text-tln-text font-medium focus:border-tln-red outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Organization</label>
              <input
                type="text" name="organization"
                className="w-full bg-tln-ink border-2 border-tln-line rounded px-4 py-3 text-tln-text font-medium focus:border-tln-red outline-none transition-colors"
                placeholder="Company or organization"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Your Role</label>
              <input
                type="text" name="role"
                className="w-full bg-tln-ink border-2 border-tln-line rounded px-4 py-3 text-tln-text font-medium focus:border-tln-red outline-none transition-colors"
                placeholder="Founder, Director, etc."
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-tln-muted mb-2">Project Type *</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {projectTypes.map(t => (
                <label key={t} className="flex items-center gap-2 cursor-pointer border border-tln-line rounded px-3 py-2 hover:border-tln-red transition-colors has-[:checked]:border-tln-red has-[:checked]:bg-tln-ink">
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
            <textarea
              name="message" required rows={5}
              className="w-full bg-tln-ink border-2 border-tln-line rounded px-4 py-3 text-tln-text font-medium focus:border-tln-red outline-none transition-colors resize-none"
              placeholder="Describe what you are trying to build, automate, secure, or teach. The more detail the better."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 bg-tln-red text-white rounded font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
          >
            Submit Project Request →
          </button>
        </form>

        {/* What happens next */}
        <div className="mt-12 border-l-4 border-tln-red pl-6">
          <h2 className="text-2xl mb-3">What Happens Next</h2>
          <p className="text-tln-text/80 font-medium leading-relaxed">
            After you submit the form, a human from TLN will review your request. If there is a fit,
            we will schedule an intake call to understand your goals, scope, risks, timeline, and
            next steps.
          </p>
        </div>
      </section>
    </div>
  );
}
