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

    el.style.animationDelay = `${delay}ms`;
    void el.offsetWidth;
    el.classList.add("fade-in-ready");

    return () => {
      el.classList.remove("fade-in-ready");
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={`fade-in ${className}`.trim()}>
      {children}
    </Tag>
  );
}
