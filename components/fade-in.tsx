"use client";

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";

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

    const raf = requestAnimationFrame(() => {
      el.style.animationDelay = `${delay}ms`;
      el.classList.add("animate-fade-in");
    });
    return () => cancelAnimationFrame(raf);
  }, [delay]);

  return (
    <Tag ref={ref} className={`fade-in-initial ${className}`.trim()}>
      {children}
    </Tag>
  );
}
