
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import styles from "./styles.module.css";
import { gymData } from "@/data";

// Counter Animation Hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return { count, ref };
}

// Individual Stat Card Component
function StatCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div
      ref={ref}
      className={styles.animateFloat}
      style={{
        animationDelay: `${index * 1}s`,
      }}
    >
      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}
        <span className="text-mest-blue-9">{suffix}</span>
      </div>
      <div className="text-gray-300 font-medium text-sm">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const { hero } = gymData;

  const stats = [
    { value: 2500, suffix: "+", label: "Active Members" },
    { value: 50, suffix: "+", label: "Expert Trainers" },
    { value: 100, suffix: "+", label: "Classes Weekly" },
    { value: 98, suffix: "%", label: "Success Rate" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image}
          alt="Gym Hero"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40 dark:from-black/90 dark:via-black/70 dark:to-black/50" />
      </div>

      {/* Content - Center Aligned */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ${styles.heroFadeInUp} ${styles.delay1}`}
          >
            {hero.title1} <br /> {hero.title2}
          </h1>

          {/* Description */}
          <p
            className={`text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto ${styles.heroFadeInUp} ${styles.delay2}`}
          >
            {hero.description}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 ${styles.heroFadeInUp} ${styles.delay3}`}
          >
            <Link
              href="#pricing"
              className="group inline-flex items-center justify-center px-8 py-4 bg-mest-blue-6 hover:bg-mest-blue-7 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mest-blue-6/50"
            >
              {hero.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105">
              <Play className="mr-2 w-5 h-5" />
              Watch Tour
            </button>
          </div>

          {/* Float Wave Animation Stats */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 text-center ${styles.heroFadeInUp} ${styles.delay4}`}
          >
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>
    </section>
  );
}
