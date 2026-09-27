import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 32, className = "", once = true }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, amount: 0.15 }}
    transition={{ duration: 0.8, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ label, title, copy, id }) => (
  <div id={id} className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
    <div className="max-w-2xl">
      <Reveal>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-electric">
          <span className="inline-block h-px w-8 bg-electric/60" />
          {label}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
    </div>
    {copy && (
      <Reveal delay={0.16} className="max-w-sm">
        <p className="text-sm leading-relaxed text-slate-400 md:text-base">{copy}</p>
      </Reveal>
    )}
  </div>
);
