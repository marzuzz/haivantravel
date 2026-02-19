"use client";

import { useEffect, useRef } from "react";
import PartnerCard from "./partnetCard";

type Props = {
  className?: string;
  speedPxPerFrame?: number;
};

export default function AutoScrollPartners({
  className = "",
  speedPxPerFrame = 0.6,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isSmall = window.matchMedia("(max-width: 639px)").matches; // < sm
    if (prefersReducedMotion || !isSmall) return;

    let rafId = 0;
    let lastTs = 0;
    let pausedUntil = 0;

    const pauseBriefly = () => {
      pausedUntil = performance.now() + 1500;
    };

    el.addEventListener("pointerdown", pauseBriefly, { passive: true });
    el.addEventListener("touchstart", pauseBriefly, { passive: true });
    el.addEventListener("mouseenter", pauseBriefly, { passive: true });
    el.addEventListener("wheel", pauseBriefly, { passive: true });

    const tick = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;

      if (ts < pausedUntil) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      if (maxScrollLeft > 0) {
        // Normalize speed to ~60fps baseline.
        const step = speedPxPerFrame * (dt / 16.67);
        const next = el.scrollLeft + step;
        el.scrollLeft = next >= maxScrollLeft - 1 ? 0 : next;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("pointerdown", pauseBriefly);
      el.removeEventListener("touchstart", pauseBriefly);
      el.removeEventListener("mouseenter", pauseBriefly);
      el.removeEventListener("wheel", pauseBriefly);
    };
  }, [speedPxPerFrame]);

  return (
    <div
      ref={scrollerRef}
      className={`w-full overflow-x-auto scroll-smooth ${className}`}
      aria-label="Danh sách đối tác"
    >
      <div className="flex gap-[20px] min-w-max pt-6">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div key={idx} className="flex-shrink-0 w-[200px]">
            <PartnerCard />
          </div>
        ))}
      </div>
    </div>
  );
}

