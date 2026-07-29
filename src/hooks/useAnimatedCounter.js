import { useState, useEffect, useRef } from "react";

export function useAnimatedCounter(end, duration = 2000, startOnVisible = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnVisible) {
      setStarted(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!started) return;

    const numericEnd = parseFloat(end);
    if (isNaN(numericEnd)) {
      setCount(end);
      return;
    }

    const isDecimal = String(end).includes(".");
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numericEnd;

      setCount(isDecimal ? current.toFixed(1) : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return [ref, count];
}
