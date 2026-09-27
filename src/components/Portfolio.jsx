import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { Reveal, SectionHeading, EASE } from "@/components/Reveal";
import { FILTERS, PROJECTS } from "@/data/content";

function CaseModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[95] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-testid="portfolio-modal"
    >
      <div
        className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
        onClick={onClose}
        data-testid="portfolio-modal-backdrop"
      />
      <motion.div
        data-lenis-prevent
        className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-panel"
        initial={{ y: 44, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <div className="relative">
          <img src={project.url} alt={project.title} className="aspect-[16/9] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
          <button
            onClick={onClose}
            data-testid="portfolio-modal-close"
            aria-label="Close case study"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-white backdrop-blur transition-colors hover:bg-electric hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 md:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-electric/30 bg-electric/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-electric">
              {project.category}
            </span>
            <span className="font-mono text-xs text-slate-500">{project.year}</span>
          </div>

          <h3 className="font-display text-2xl font-bold text-white md:text-4xl">{project.title}</h3>
          <p className="mt-4 leading-relaxed text-slate-400">{project.desc}</p>

          <div className="mt-8 flex items-center gap-5 rounded-2xl border border-mint/25 bg-mint/5 p-6">
            <p className="font-display text-4xl font-extrabold text-mint md:text-5xl">{project.stat}</p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
              {project.statLabel}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.filters.includes(filter));

  useEffect(() => {
    if (!window.__lenis) return;
    if (active) window.__lenis.stop();
    else window.__lenis.start();
  }, [active]);

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          label="02 — Selected work"
          title={
            <>
              Projects that pay
              <br />
              for <span className="text-gradient">themselves.</span>
            </>
          }
          copy="A sample of what we ship — fast products, ranked pages and businesses that own their local map."
        />

        <Reveal className="mb-10 flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              data-testid={`portfolio-filter-${f.id}`}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] transition-all duration-300 ${
                filter === f.id
                  ? "border-electric bg-electric text-ink font-semibold"
                  : "border-white/15 text-slate-400 hover:border-electric/50 hover:text-electric"
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div key={filter} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06} className="h-full">
              <article
                data-cursor="view"
                data-testid={`portfolio-card-${p.id}`}
                onClick={() => setActive(p)}
                className="group h-full"
              >
                <div className="relative aspect-[4/3] h-full overflow-hidden rounded-2xl border border-white/10 bg-panel">
                  <img
                    src={p.url}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/15 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-300 backdrop-blur">
                    {p.category}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                      <p className="mt-1 font-mono text-xs text-mint">
                        {p.stat} · {p.statLabel}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:border-transparent group-hover:bg-electric group-hover:text-ink group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <CaseModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
