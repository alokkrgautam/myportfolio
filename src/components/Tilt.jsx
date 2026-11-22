import { useRef } from "react";

// Mouse-follow 3D tilt with a light glare. Wrap any card content.
export default function Tilt({ children, className = "", max = 9 }) {
  const ref = useRef(null);
  const set = (rx, ry, gx, gy) => {
    const s = ref.current.style;
    s.setProperty("--rx", `${rx}deg`); s.setProperty("--ry", `${ry}deg`);
    s.setProperty("--gx", `${gx}%`); s.setProperty("--gy", `${gy}%`);
  };
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    set(-y * max * 2, x * max * 2, (x + 0.5) * 100, (y + 0.5) * 100);
  };
  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={() => set(0, 0, 50, 50)}>
      {children}
    </div>
  );
}
