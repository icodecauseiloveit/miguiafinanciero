"use client";
import { useState, useEffect, useRef } from "react";

interface AnimatedNumberProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function AnimatedNumber({ target, prefix = "", suffix = "", duration = 2200 }: AnimatedNumberProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const s = Date.now();
        const tick = () => {
          const p = Math.min((Date.now() - s) / duration, 1);
          setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        tick();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString("es-CO")}{suffix}</span>;
}
