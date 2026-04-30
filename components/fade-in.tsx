import { type CSSProperties, type ElementType, type ReactNode } from "react";

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
      style={{ "--fade-in-delay": `${delay}ms` } as CSSProperties}
      className={["fade-in", className].filter(Boolean).join(" ")}
    >
      {children}
    </Tag>
  );
}
