"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const style: CSSProperties | undefined = mounted
    ? { animationDelay: `${delay}ms` }
    : undefined;
  const animClass = mounted ? "animate-fade-in" : "opacity-0";

  return (
    <Tag className={`${className} ${animClass}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
