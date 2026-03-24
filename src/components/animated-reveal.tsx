"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimatedRevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
};

export function AnimatedReveal({
  children,
  className = "",
  stagger = false,
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${stagger ? "reveal-stagger" : "reveal"} ${
        visible ? "is-visible" : ""
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}
