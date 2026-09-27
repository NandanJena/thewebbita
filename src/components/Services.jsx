import { useRef } from "react";
import { Code2, Search, MapPin, Check, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { SERVICES } from "@/data/content";

const ICONS = { code: Code2, search: Search, map: MapPin };

function ServiceCard({ s, i }) {
  const ref = useRef(null);
  const Icon = ICONS[s.icon];

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Reveal delay={i * 0.1} className="h-full">
      <div
        ref={ref}
        onMouseMove={onMove}
        data-testid={`service-card-${s.id}`}
        className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-panel transition-colors duration-500 hover:border-electric/30"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(56,189,248,0.10), transparent 65%)",
          }}
        />
        <div className="relative flex h-full flex-col p-8 md:p-10">
          <div className="mb-8 flex items-center justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-electric/25 bg-electric/10 text-electric">
              <Icon className="h-5 w-5" />
            </span>
            <span className="font-mono text-sm text-slate-600">{s.num}</span>
          </div>

          <h3 className="mb-3 font-display text-2xl font-semibold text-white">{s.title}</h3>
          <p className="mb-8 text-sm leading-relaxed text-slate-400">{s.desc}</p>

          <ul className="mt-auto space-y-3 border-t border-white/10 pt-6">
            {s.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            data-testid={`service-link-${s.id}`}
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-electric transition-opacity duration-500 group-hover:opacity-100 md:opacity-0"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          label="01 — What we do"
          title={
            <>
              Three engines.
              <br />
              One outcome: <span className="text-gradient">growth.</span>
            </>
          }
          copy="Everything a business needs to win online — built, ranked and maintained by one senior team."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
