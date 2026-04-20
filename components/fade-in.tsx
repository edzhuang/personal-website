"use client";

import { type ElementType, type ReactNode } from "react";

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
  return (
    <Tag
      style={{ animationDelay: `${delay}ms` }}
      className={`fade-in ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
