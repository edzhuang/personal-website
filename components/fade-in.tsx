"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type FadeInProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
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

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.style.opacity = "1";
      el.style.filter = "none";
      el.style.transform = "none";
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
        fill: "both",
      },
    );

    return () => animation.cancel();
  }, [delay]);

  return (
    <Tag ref={ref} className={`fade-in-initial ${className}`.trim()}>
      {children}
    </Tag>
  );
}
