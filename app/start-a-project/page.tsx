import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Start a Project | The LAN Network",
  description: "Tell us what you are trying to build, automate, secure, or teach. A human from TLN will review your request.",
};

export default function StartAProject() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Get Started</p>
        <h1 className="text-5xl md:text-6xl mb-6">Start a Project With TLN</h1>
        <p className="text-xl text-tln-text/90 font-medium max-w-2xl leading-relaxed">
          Tell us what you are trying to build, automate, secure, or teach.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <ContactForm />
      </section>
    </div>
  );
}
