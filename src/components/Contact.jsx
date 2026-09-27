import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { CONTACT } from "@/data/content";

const CHANNELS = [
  {
    id: "whatsapp",
    testId: "contact-whatsapp-btn",
    href: CONTACT.whatsappHref,
    external: true,
    icon: MessageCircle,
    label: "WhatsApp us",
    detail: "Fastest reply — usually minutes",
    primary: true,
  },
  {
    id: "email",
    testId: "contact-email-btn",
    href: CONTACT.emailHref,
    external: false,
    icon: Mail,
    label: "Email us",
    detail: CONTACT.email,
    primary: false,
  },
  {
    id: "call",
    testId: "contact-call-btn",
    href: CONTACT.phoneHref,
    external: false,
    icon: Phone,
    label: "Call us",
    detail: CONTACT.phoneDisplay,
    primary: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indiglow/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
        <Reveal>
          <p className="mb-6 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-electric">
            <span className="inline-block h-px w-8 bg-electric/60" />
            05 — Contact
            <span className="inline-block h-px w-8 bg-electric/60" />
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s build your
            <br />
            next <span className="text-gradient">big thing.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            Tell us where you want to appear — we&apos;ll engineer the website, the SEO and the map
            ranking to get you there.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.id} delay={0.2 + i * 0.08} className="sm:auto">
              <Magnetic strength={0.25}>
                <a
                  href={c.href}
                  data-testid={c.testId}
                  {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={`group flex items-center justify-between gap-4 rounded-2xl border px-6 py-5 transition-all duration-300 sm:min-w-[230px] ${
                    c.primary
                      ? "border-transparent bg-gradient-to-r from-electric to-indiglow text-ink shadow-glow hover:shadow-glow-lg"
                      : "border-white/15 text-white hover:border-electric/50 hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-3.5 text-left">
                    <c.icon className={`h-5 w-5 ${c.primary ? "text-ink" : "text-electric"}`} />
                    <span>
                      <span className="block text-sm font-semibold">{c.label}</span>
                      <span
                        className={`block font-mono text-[10px] uppercase tracking-widest ${
                          c.primary ? "text-ink/70" : "text-slate-500"
                        }`}
                      >
                        {c.detail}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </Magnetic>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.45}>
          <p className="mt-12 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse-dot" />
            Currently accepting new projects · Replies within 24 hours
          </p>
        </Reveal>
      </div>
    </section>
  );
}
