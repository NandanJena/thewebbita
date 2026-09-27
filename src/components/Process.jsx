import { Reveal, SectionHeading } from "@/components/Reveal";
import { PROCESS_STEPS } from "@/data/content";

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          label="03 — How we work"
          title={
            <>
              From first call
              <br />
              to first <span className="text-gradient">rank.</span>
            </>
          }
          copy="A senior, four-step operating system. No juniors learning on your budget, no black boxes."
        />

        <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-electric/50 via-indiglow/40 to-transparent lg:block"
          />
          {PROCESS_STEPS.map((st, i) => (
            <Reveal key={st.num} delay={i * 0.12}>
              <div className="relative">
                <span className="relative z-10 mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-electric/30 bg-ink font-mono text-xs text-electric">
                  {st.num}
                </span>
                <h3 className="mb-3 font-display text-xl font-semibold text-white">{st.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{st.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
