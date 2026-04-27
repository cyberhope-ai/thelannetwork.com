import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | The LAN Network",
  description: "Tell us what you are trying to build, automate, secure, or teach. A human from TLN will review your request.",
};

export default function Contact() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <p className="text-tln-red text-sm uppercase tracking-[0.2em] font-bold mb-4">Get in Touch</p>
        <h1 className="text-5xl md:text-6xl mb-4">Contact TLN</h1>
        <p className="text-xl text-tln-text/90 font-medium max-w-2xl leading-relaxed">
          Tell us what you are trying to build, automate, secure, or teach.
          A human from TLN will review your request and respond within one business day.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <ContactForm />
        <div className="mt-8 pt-6 border-t border-tln-line">
          <p className="text-tln-muted text-sm">
            Prefer email? <a href="mailto:rick@thelannetwork.com" className="text-tln-red hover:underline">rick@thelannetwork.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
