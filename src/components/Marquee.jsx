import { MARQUEE_ITEMS } from "@/data/content";

const Row = ({ hidden }) => (
  <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
    {MARQUEE_ITEMS.map((item) => (
      <span key={item} className="flex items-center">
        <span className="whitespace-nowrap px-6 font-display text-2xl font-medium text-white/55 md:px-10 md:text-4xl">
          {item}
        </span>
        <span className="h-2 w-2 rotate-45 bg-electric/70" />
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <section className="marquee-paused relative overflow-hidden border-y border-white/10 bg-panel/50 py-7 md:py-9">
      <div className="animate-marquee flex w-max">
        <Row hidden={false} />
        <Row hidden={true} />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent"
      />
    </section>
  );
}
