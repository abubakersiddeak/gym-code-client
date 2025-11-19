
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu, 
  X,
  Dumbbell,
  Moon,
  Sun,
  Home,
  Sparkles,
  Calendar,
  Users,
  DollarSign,
  Send,
} from "lucide-react";
import { useTheme } from "@/provider/ThemeProvider";

const navLinks = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#features", label: "Features", icon: Sparkles },
  { href: "#classes", label: "Classes", icon: Calendar },
  { href: "#trainers", label: "Trainers", icon: Users },
  { href: "#pricing", label: "Pricing", icon: DollarSign },

  { href: "#contact", label: "Contact", icon: Send },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(`#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple toggle between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-mest-gray-1/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 group"
            onClick={() => setActiveSection("#home")}
          >
            <div className="w-9 h-9 bg-mest-blue-6 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-mest-gray-1 dark:text-white">
              Fit<span className="text-mest-blue-6">Zone</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-mest-blue-6 bg-mest-blue-6/10"
                      : "text-mest-gray-6 dark:text-mest-gray-7 hover:text-mest-blue-6 hover:bg-mest-blue-6/5"
                  }`}
                  onClick={() => setActiveSection(link.href)}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div> 

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg bg-mest-gray-10 dark:bg-mest-gray-3 flex items-center justify-center hover:bg-mest-blue-6/10 dark:hover:bg-mest-blue-6/20 hover:text-mest-blue-6 transition-all duration-300"
              aria-label="Toggle theme"
              title={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-9 h-9 rounded-lg bg-mest-gray-10 dark:bg-mest-gray-3 flex items-center justify-center hover:bg-mest-gray-alpha-3 dark:hover:bg-mest-gray-4 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-mest-gray-1 dark:text-white" />
              ) : (
                <Menu className="w-5 h-5 text-mest-gray-1 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-3 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-mest-blue-6 bg-mest-blue-6/10"
                      : "text-mest-gray-6 dark:text-mest-gray-7 hover:text-mest-blue-6 hover:bg-mest-blue-6/5"
                  }`}
                  onClick={() => {
                    setActiveSection(link.href);
                    setIsOpen(false);
                  }}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
