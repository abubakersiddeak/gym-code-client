// src/hooks/useScrollSpy.ts
"use client";

import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find which section is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.querySelector(sectionIds[i]);
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionIds[i]);
            break;
          } 
        }
      }

      // If at very top, set first section as active
      if (window.scrollY < 100) {
        setActiveSection(sectionIds[0]);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}