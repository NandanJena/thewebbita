import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { STATS } from "@/data/content";

function Counter({ value, decimals = 0, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const start = performance.now();
    const D = 1600;
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / D, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      <span className="text-gradient">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-panel/40 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-6 md:px-10 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="text-center lg:text-left" data-testid={`stat-item-${i}`}>
              <p className="font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                <Counter value={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 md:text-xs">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
