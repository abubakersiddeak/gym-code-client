
"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./styles.module.css";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimationWrapper({
  children,
  className = "",
  delay = 0,
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current; // Copy ref to variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Use copied variable
      }
    };
  }, []); // Empty dependency array

  return (
    <div
      ref={ref}
      className={`${styles.fadeInUp} ${
        isVisible ? styles.fadeInUpActive : ""
      } ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}