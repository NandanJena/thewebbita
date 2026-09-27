import { useEffect, useRef } from "react";

const CYAN = [56, 189, 248];
const INDIGO = [99, 102, 241];
const MINT = [16, 185, 129];

export default function Scene3D({ className = "" }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return undefined;
    const ctx = canvas.getContext("2d");

    let raf = 0;
    let running = true;
    let W = 0;
    let H = 0;
    let cx = 0;
    let cy = 0;
    let R = 0;

    const small = window.innerWidth < 768;
    const N = small ? 430 : 780;

    const pts = [];
    const GA = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i += 1) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const t = GA * i;
      pts.push({ x: Math.cos(t) * r, y, z: Math.sin(t) * r });
    }

    const spacing = Math.sqrt((4 * Math.PI) / N);
    const MAXD = spacing * 2.05;
    const lines = [];
    for (let i = 0; i < N; i += 1) {
      for (let j = i + 1; j < N; j += 1) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const dz = pts[i].z - pts[j].z;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < MAXD) lines.push([i, j]);
      }
    }

    const ringDefs = [
      { tilt: 1.1, yaw: 0.4, r: 1.32 },
      { tilt: -0.7, yaw: 1.9, r: 1.55 },
      { tilt: 0.35, yaw: 3.1, r: 1.18 },
    ];
    const rings = ringDefs.map((d) => {
      const ring = [];
      for (let i = 0; i < 110; i += 1) {
        const a = (i / 110) * Math.PI * 2;
        const x0 = Math.cos(a) * d.r;
        const z0 = Math.sin(a) * d.r;
        const y1 = -z0 * Math.sin(d.tilt);
        const z1 = z0 * Math.cos(d.tilt);
        const x2 = x0 * Math.cos(d.yaw) + z1 * Math.sin(d.yaw);
        const z2 = -x0 * Math.sin(d.yaw) + z1 * Math.cos(d.yaw);
        ring.push({ x: x2, y: y1, z: z2 });
      }
      return ring;
    });

    let rotY = 0;
    let velY = 0.0022;
    let rotX = -0.22;
    let targetRotX = -0.22;
    let dragging = false;
    let lastX = 0;
    let mx = -9999;
    let my = -9999;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2;
      cy = H / 2;
      R = Math.min(W, H) * (small ? 0.42 : 0.36);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const onDown = (e) => {
      if (e.pointerType === "touch") return;
      dragging = true;
      lastX = e.clientX;
    };
    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
      targetRotX = -0.22 + (my / Math.max(rect.height, 1) - 0.5) * 0.35;
      if (dragging) {
        velY = (e.clientX - lastX) * 0.0038;
        rotY += velY;
        lastX = e.clientX;
      }
    };
    const onUp = () => {
      dragging = false;
    };
    const onLeave = () => {
      dragging = false;
      mx = -9999;
      my = -9999;
    };

    wrap.addEventListener("pointerdown", onDown);
    wrap.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    wrap.addEventListener("pointerleave", onLeave);

    const draw = () => {
      if (!running) return;

      if (!dragging) {
        rotY += velY;
        velY += (0.0022 - velY) * 0.02;
      }
      rotX += (targetRotX - rotX) * 0.06;

      const cyr = Math.cos(rotY);
      const syr = Math.sin(rotY);
      const cxr = Math.cos(rotX);
      const sxr = Math.sin(rotX);

      ctx.clearRect(0, 0, W, H);

      const proj = (p) => {
        const x = p.x * cyr + p.z * syr;
        let z = -p.x * syr + p.z * cyr;
        const y = p.y * cxr - z * sxr;
        z = p.y * sxr + z * cxr;
        const persp = 2.4 / (2.4 + z);
        return { sx: cx + x * R * persp, sy: cy + y * R * persp, z, persp };
      };

      rings.forEach((ring) => {
        ctx.beginPath();
        ring.forEach((p, i) => {
          const q = proj(p);
          if (i === 0) ctx.moveTo(q.sx, q.sy);
          else ctx.lineTo(q.sx, q.sy);
        });
        ctx.closePath();
        ctx.strokeStyle = "rgba(56,189,248,0.13)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      for (let k = 0; k < lines.length; k += 1) {
        const [i, j] = lines[k];
        const a = proj(pts[i]);
        const b = proj(pts[j]);
        const zc = (a.z + b.z) / 2;
        const alpha = (0.5 - zc * 0.55) * 0.34;
        if (alpha <= 0.012) continue;
        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      for (let i = 0; i < N; i += 1) {
        const q = proj(pts[i]);
        let { sx, sy } = q;
        const depth = (1 - q.z) / 2;
        let alpha = 0.15 + depth * 0.85;
        let size = (0.9 + depth * 1.9) * q.persp;

        const dxm = sx - mx;
        const dym = sy - my;
        const dm = Math.sqrt(dxm * dxm + dym * dym);
        if (dm < 130 && dm > 0.001) {
          const f = 1 - dm / 130;
          sx += (dxm / dm) * f * 16;
          sy += (dym / dm) * f * 16;
          alpha = Math.min(1, alpha + f * 0.5);
          size += f * 1.4;
        }

        const c = depth > 0.72 ? CYAN : INDIGO;
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha * 0.9})`;
        ctx.fill();
      }

      const hubs = [40, 210, 377, 560, 690];
      hubs.forEach((hi) => {
        if (hi >= N) return;
        const q = proj(pts[hi]);
        const depth = (1 - q.z) / 2;
        if (depth < 0.35) return;
        ctx.beginPath();
        ctx.arc(q.sx, q.sy, 3.2 * q.persp, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${MINT[0]},${MINT[1]},${MINT[2]},${0.4 + depth * 0.6})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(q.sx, q.sy, 7 * q.persp, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${MINT[0]},${MINT[1]},${MINT[2]},${0.25 * depth})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      wrap.removeEventListener("pointerdown", onDown);
      wrap.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      wrap.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={className}
      data-testid="hero-3d-scene"
      style={{ touchAction: "pan-y" }}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
