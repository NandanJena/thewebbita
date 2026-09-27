import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default");

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return undefined;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf;

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e) => {
      const t = e.target;
      if (!(t instanceof Element) || !t.closest("a, button, [data-cursor]")) {
        setVariant("default");
        return;
      }
      setVariant(t.closest('[data-cursor="view"]') ? "view" : "hover");
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[99] h-1.5 w-1.5 rounded-full bg-electric"
        data-testid="custom-cursor-dot"
      />
      <div
        ref={ringRef}
        data-testid="custom-cursor-ring"
        className={`pointer-events-none fixed left-0 top-0 z-[98] flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color] duration-300 ${
          variant === "view"
            ? "h-16 w-16 border-transparent bg-electric"
            : variant === "hover"
              ? "h-14 w-14 border-white/70"
              : "h-8 w-8 border-white/40"
        }`}
      >
        {variant === "view" && (
          <span className="font-mono text-[9px] font-semibold tracking-[0.2em] text-ink">VIEW</span>
        )}
      </div>
    </>
  );
}
