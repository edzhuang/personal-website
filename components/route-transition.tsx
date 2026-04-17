"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

type RouteTransitionProps = {
  children: ReactNode;
  className?: string;
};

export function RouteTransition({ children, className }: RouteTransitionProps) {
  const pathname = usePathname();

  return (
    <div key={pathname} className={className}>
      {children}
    </div>
  );
}
