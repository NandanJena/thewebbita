import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Scene3D from "@/components/Scene3D";
import Magnetic from "@/components/Magnetic";
import { EASE } from "@/components/Reveal";

const Line = ({ children, delay, active }) => (
  <span className="mask-line">
    <motion.span
      className="block"
      initial={{ y: "112%" }}
      animate={active ? { y: "0%" } : {}}
      transition={{ duration: 0.95, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero({ active }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Scene3D className="absolute inset-0 z-0" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,8,11,0.5)_72%,rgba(7,8,11,1)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-44 bg-gradient-to-b from-transparent to-ink"
      />

      <motion.div
        style={{ y: yContent, opacity }}
        className="pointer-events-none relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 md:px-10 md:pt-36"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse-dot" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-300 md:text-[11px]">
            Accepting new projects — 2026
          </span>
        </motion.div>

        <h1
          data-testid="hero-title"
          className="font-display text-[clamp(2.7rem,7.5vw,6.8rem)] font-extrabold leading-[1.02] tracking-tight text-white"
        >
          <Line active={active} delay={0.1}>
            Websites engineered
          </Line>
          <Line active={active} delay={0.2}>
            <span className="text-gradient">to rank.</span>
          </Line>
          <Line active={active} delay={0.3}>
            Built to be found.
          </Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="mt-8 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
        >
          thewebBita crafts high-performance React JS &amp; Node JS websites, surgical SEO and
          Google Map ranking systems that turn local searches into paying customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.58, ease: EASE }}
          className="pointer-events-auto mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Magnetic>
            <a
              href="#contact"
              data-testid="hero-cta-primary"
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-indiglow px-8 py-4 font-semibold text-ink shadow-glow transition-shadow duration-300 hover:shadow-glow-lg"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#work"
              data-testid="hero-cta-secondary"
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:border-electric/60 hover:text-electric"
            >
              <Sparkles className="h-4 w-4" />
              See our work
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-8 left-6 z-10 flex items-center gap-4 md:left-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
          Scroll to explore
        </span>
        <span className="h-10 w-px bg-white/30 animate-scroll-line" />
      </div>
      <div className="pointer-events-none absolute bottom-8 right-6 z-10 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600 md:right-10 md:block">
        React JS · SEO · Map Ranking
      </div>
    </section>
  );
}
