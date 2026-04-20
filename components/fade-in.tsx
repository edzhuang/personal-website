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
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.filter = "none";
      return;
    }

    const animation = el.animate(
      [
        { opacity: 0, transform: "translateY(8px)", filter: "blur(8px)" },
        { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
      ],
      {
        duration: 600,
        delay,
        easing: "ease-out",
        fill: "forwards",
      },
    );

    return () => animation.cancel();
  }, [delay]);

  return (
    <Tag ref={ref} style={INITIAL_STYLE} className={className}>
      {children}
    </Tag>
  );
}
