"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type FadeInProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
};

const INITIAL_STYLE: CSSProperties = {
  opacity: 0,
  transform: "translateY(8px)",
  filter: "blur(8px)",
};

const FINAL_STYLE: CSSProperties = {
  opacity: 1,
  transform: "translateY(0)",
  filter: "blur(0)",
};

export function FadeIn({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      Object.assign(el.style, FINAL_STYLE);
      return;
    }

    let raf1 = 0;
    let raf2 = 0;

    Object.assign(el.style, INITIAL_STYLE);
    el.style.transition = "none";

    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => {
        el.style.transitionProperty = "opacity, transform, filter";
        el.style.transitionDuration = "900ms";
        el.style.transitionTimingFunction = "ease-out";
        el.style.transitionDelay = `${delay}ms`;
        Object.assign(el.style, FINAL_STYLE);
      });
    });

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [delay]);

  return (
    <Tag ref={ref} style={INITIAL_STYLE} className={className}>
      {children}
    </Tag>
  );
}
