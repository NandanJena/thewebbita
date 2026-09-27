import { ArrowUp, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { LogoMark, Wordmark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { CONTACT, NAV_LINKS, SERVICES } from "@/data/content";

const SOCIALS = [
  { id: "github", icon: Github, href: "#top" },
  { id: "twitter", icon: Twitter, href: "#top" },
  { id: "linkedin", icon: Linkedin, href: "#top" },
  { id: "instagram", icon: Instagram, href: "#top" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 pt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col justify-between gap-14 pb-16 md:flex-row md:gap-24">
          <div className="max-w-sm">
            <a href="#top" data-testid="footer-logo" className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <Wordmark className="text-xl" />
            </a>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              A web development studio engineering fast React JS &amp; Node JS products, surgical
              SEO and Google Map ranking systems for businesses that want to be found.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  data-testid={`footer-social-${s.id}`}
                  aria-label={s.id}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-400 transition-all duration-300 hover:border-electric hover:text-electric"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Sitemap
              </p>
              <ul className="space-y-3">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      data-testid={`footer-link-${l.href.slice(1)}`}
                      className="text-sm text-slate-400 transition-colors hover:text-electric"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Services
              </p>
              <ul className="space-y-3">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <a
                      href="#services"
                      data-testid={`footer-service-${s.id}`}
                      className="text-sm text-slate-400 transition-colors hover:text-electric"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href={CONTACT.emailHref}
                    data-testid="footer-email"
                    className="text-sm text-slate-400 transition-colors hover:text-electric"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.phoneHref}
                    data-testid="footer-phone"
                    className="text-sm text-slate-400 transition-colors hover:text-electric"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="footer-whatsapp"
                    className="text-sm text-slate-400 transition-colors hover:text-electric"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Reveal y={60}>
        <p
          aria-hidden="true"
          data-testid="footer-wordmark"
          className="select-none whitespace-nowrap text-center font-display text-[19vw] font-extrabold leading-[0.8] tracking-tight text-outline"
        >
          thewebBita
        </p>
      </Reveal>

      <div className="relative border-t border-white/10 bg-ink/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600 md:flex-row md:px-10">
          <span data-testid="footer-copyright">© 2026 thewebBita — All rights reserved</span>
          <span>Crafted with React JS &amp; Node JS</span>
          <button
            data-testid="back-to-top-btn"
            onClick={() => window.__lenis?.scrollTo(0, { duration: 1.6 })}
            className="flex items-center gap-2 transition-colors hover:text-electric"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
