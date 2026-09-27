import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X, MessageCircle } from "lucide-react";
import { LogoMark, Wordmark } from "@/components/Logo";
import { CONTACT, NAV_LINKS } from "@/data/content";
import { EASE } from "@/components/Reveal";

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!window.__lenis) return;
    if (open) window.__lenis.stop();
    else if (active) window.__lenis.start();
  }, [open, active]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={active ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ${
          scrolled ? "glass border-b border-white/10" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" data-testid="header-logo" className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8" />
            <Wordmark className="text-lg" />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                data-testid={`nav-link-${l.href.slice(1)}`}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 hover:text-electric"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              data-testid="nav-cta"
              className="group hidden items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-5 py-2.5 text-sm font-semibold text-electric transition-all duration-300 hover:bg-electric hover:text-ink md:flex"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[75] flex flex-col justify-center bg-ink/95 px-8 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  data-testid={`nav-mobile-${l.href.slice(1)}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.05, duration: 0.5, ease: EASE }}
                  className="border-b border-white/10 py-4 font-display text-4xl font-semibold text-white"
                >
                  <span className="mr-4 font-mono text-xs text-electric">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noreferrer"
                data-testid="nav-mobile-whatsapp"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
                className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-electric to-indiglow px-7 py-3.5 font-semibold text-ink"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
