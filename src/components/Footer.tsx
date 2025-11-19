import Link from "next/link";
import { Dumbbell, Mail, Phone, MapPin, Clock } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
  LinkedInIcon,
  TikTokIcon,
} from "@/socialCustomSVGIcon/SocialCustomSVGIcon";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Classes", href: "#classes" },
    { label: "Trainers", href: "#trainers" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
  ],
  support: [
    { label: "FAQs", href: "#faqs" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Cancellation Policy", href: "#cancellation" },
    { label: "Contact Us", href: "#contact" },
  ],
  classes: [
    { label: "Yoga & Meditation", href: "#classes" },
    { label: "CrossFit Training", href: "#classes" },
    { label: "Cardio Blast", href: "#classes" },
    { label: "Strength Training", href: "#classes" },
    { label: "HIIT Workouts", href: "#classes" },
  ],
};

const socialLinks = [
  {
    icon: FacebookIcon,
    href: "https://facebook.com",
    label: "Facebook",
    hoverColor: "hover:bg-[#1877F2]",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com",
    label: "Instagram",
    hoverColor:
      "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]",
  },
  {
    icon: XIcon,
    href: "https://x.com",
    label: "X (Twitter)",
    hoverColor: "hover:bg-mest-gray-1 dark:hover:bg-white",
  },
  {
    icon: YouTubeIcon,
    href: "https://youtube.com",
    label: "YouTube",
    hoverColor: "hover:bg-[#FF0000]",
  },
  {
    icon: LinkedInIcon,
    href: "https://linkedin.com",
    label: "LinkedIn",
    hoverColor: "hover:bg-[#0A66C2]",
  },
  {
    icon: TikTokIcon,
    href: "https://tiktok.com",
    label: "TikTok",
    hoverColor: "hover:bg-mest-gray-1 dark:hover:bg-white",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-mest-gray-1 border-t border-mest-gray-10 dark:border-mest-gray-3">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <ScrollAnimationWrapper className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-6 group">
              <div className="w-12 h-12 bg-mest-blue-6 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-mest-gray-1 dark:text-white">
                Fit<span className="text-mest-blue-6">Zone</span>
              </span>
            </Link>

            <p className="text-mest-gray-6 dark:text-mest-gray-7 mb-6 leading-relaxed max-w-md">
              Transform your body and mind at FitZone. Join our community of
              fitness enthusiasts and achieve your health goals with expert
              guidance and state-of-the-art facilities.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-mest-gray-6 dark:text-mest-gray-7 hover:text-mest-blue-6 transition-colors duration-300 group">
                <MapPin className="w-5 h-5 text-mest-blue-6 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">
                  123 Fitness Street, Health City, HC 12345
                </span>
              </div>
              <Link
                href="tel:+15551234567"
                className="flex items-center gap-3 text-mest-gray-6 dark:text-mest-gray-7 hover:text-mest-blue-6 transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 text-mest-blue-6 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </Link>
              <Link
                href="mailto:info@fitzone.com"
                className="flex items-center gap-3 text-mest-gray-6 dark:text-mest-gray-7 hover:text-mest-blue-6 transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 text-mest-blue-6 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">info@fitzone.com</span>
              </Link>
              <div className="flex items-center gap-3 text-mest-gray-6 dark:text-mest-gray-7">
                <Clock className="w-5 h-5 text-mest-blue-6 shrink-0" />
                <div className="text-sm">
                  <div>Mon-Fri: 5AM - 11PM</div>
                  <div>Sat-Sun: 6AM - 10PM</div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Quick Links */}
          <ScrollAnimationWrapper delay={100}>
            <div>
              <h3 className="text-lg font-bold mb-4 text-mest-gray-1 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-mest-gray-6 dark:text-mest-gray-7 hover:text-mest-blue-6 transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>

          {/* Support */}
          <ScrollAnimationWrapper delay={200}>
            <div>
              <h3 className="text-lg font-bold mb-4 text-mest-gray-1 dark:text-white">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-mest-gray-6 dark:text-mest-gray-7 hover:text-mest-blue-6 transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>

          {/* Classes */}
          <ScrollAnimationWrapper delay={300}>
            <div>
              <h3 className="text-lg font-bold mb-4 text-mest-gray-1 dark:text-white">
                Popular Classes
              </h3>
              <ul className="space-y-3">
                {footerLinks.classes.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-mest-gray-6 dark:text-mest-gray-7 hover:text-mest-blue-6 transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* Newsletter */}
        <ScrollAnimationWrapper>
          <div className="mt-12 pt-12 border-t border-mest-gray-10 dark:border-mest-gray-3">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold mb-3 text-mest-gray-1 dark:text-white">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-mest-gray-6 dark:text-mest-gray-7 mb-6 text-sm">
                Get fitness tips, class updates, and exclusive offers delivered
                to your inbox weekly.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 bg-mest-gray-10 dark:bg-mest-gray-2 border border-mest-gray-10 dark:border-mest-gray-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mest-blue-6 text-mest-gray-1 dark:text-white placeholder:text-mest-gray-6 dark:placeholder:text-mest-gray-7 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-mest-blue-6 hover:bg-mest-blue-7 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-mest-gray-10 dark:border-mest-gray-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-mest-gray-6 dark:text-mest-gray-7 text-sm text-center md:text-left">
              © {currentYear} FitZone Gym. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-mest-gray-10 dark:bg-mest-gray-2 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group border border-mest-gray-10 dark:border-mest-gray-3 ${social.hoverColor}`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <div className="w-5 h-5 text-mest-gray-6 dark:text-mest-gray-7 group-hover:text-white transition-colors duration-300">
                      <Icon />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
