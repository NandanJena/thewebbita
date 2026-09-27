import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock, X } from "lucide-react";
import { Reveal, SectionHeading, EASE } from "@/components/Reveal";
import { POSTS } from "@/data/content";

function ReaderModal({ post, onClose }) {
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
      data-testid="blog-modal"
    >
      <div
        className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
        onClick={onClose}
        data-testid="blog-modal-backdrop"
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
          <img src={post.url} alt={post.title} className="aspect-[16/8] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
          <button
            onClick={onClose}
            data-testid="blog-modal-close"
            aria-label="Close article"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-white backdrop-blur transition-colors hover:bg-electric hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 md:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-slate-500">
            <span className="rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-electric">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold leading-snug text-white md:text-4xl">
            {post.title}
          </h3>

          <div className="mt-6 space-y-5">
            {post.body.map((para, i) => (
              <p key={i} className="leading-relaxed text-slate-400">
                {para}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Blog() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!window.__lenis) return;
    if (active) window.__lenis.stop();
    else window.__lenis.start();
  }, [active]);

  return (
    <section id="insights" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          label="04 — Insights"
          title={
            <>
              Field notes from the
              <br />
              ranking <span className="text-gradient">trenches.</span>
            </>
          }
          copy="What we learn building and ranking websites, written down — no fluff, no recycled listicles."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.08} className="h-full">
              <article
                data-testid={`blog-card-${post.id}`}
                onClick={() => setActive(post)}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel transition-colors duration-500 hover:border-electric/30"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.url}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-300 backdrop-blur">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="mb-3 font-display text-lg font-semibold leading-snug text-white">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-electric transition-colors group-hover:text-white">
                    Read article
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ReaderModal post={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
