"use client";

import type { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type ScrollAnimateProps = PropsWithChildren<{
  className?: string;
  delay?: string; // e.g., 'delay-100', 'delay-200'
  once?: boolean; // Trigger animation only once
  threshold?: number; // Intersection threshold (0 to 1)
}>;

export function ScrollAnimate({
  children,
  className,
  delay = "delay-0",
  once = true,
  threshold = 0.1, // Trigger slightly earlier
}: ScrollAnimateProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out", // Longer duration, ease-out timing
        delay,
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", // Start slightly lower
        className
      )}
    >
      {children}
    </div>
  );
}
