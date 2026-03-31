"use client";

import { useEffect } from "react";

export default function HashScroller({ targetId, delay = 300 }: { targetId?: string, delay?: number }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (!hash) return;
      if (targetId && hash !== targetId) return;

      setTimeout(() => {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, delay);
    }
  }, [targetId, delay]);

  return null;
}
