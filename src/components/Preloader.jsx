import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LogoMark } from "@/components/Logo";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const D = 1500;
    let raf;
    let timer;

    const tick = (t) => {
      const p = Math.min((t - start) / D, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else if (!doneRef.current) {
        doneRef.current = true;
        setExiting(true);
        timer = setTimeout(() => {
          document.body.style.overflow = "";
          onComplete();
        }, 720);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <motion.div
      data-testid="preloader-container"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      initial={{ y: 0 }}
      animate={exiting ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-5"
      >
        <LogoMark className="h-14 w-14" />
        <p className="font-display text-2xl font-semibold tracking-tight text-white">
          theweb<span className="text-gradient">Bita</span>
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">
          Web · SEO · Map Ranking
        </p>
      </motion.div>

      <div className="absolute bottom-8 right-6 md:bottom-10 md:right-10">
        <p className="font-display text-7xl font-extrabold tracking-tight text-white/90 md:text-8xl">
          {count}
          <span className="text-2xl text-electric md:text-3xl">%</span>
        </p>
      </div>
      <p className="absolute bottom-8 left-6 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600 md:bottom-12 md:left-10">
        Loading experience
      </p>

      <div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-electric to-indiglow"
        style={{ transform: `scaleX(${count / 100})` }}
      />
    </motion.div>
  );
}
