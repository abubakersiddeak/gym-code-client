import "@/styles/globals.css";
import type { Metadata } from "next";

import { Toaster } from "sonner";
import { ThemeProvider } from "@/provider/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FitZone Gym - Transform Your Body & Mind",
  description:
    "Premium fitness center offering personal training, group classes, and state-of-the-art equipment. Join FitZone today and start your fitness journey.",
  keywords:
    "gym, fitness, workout, personal training, yoga, crossfit, cardio, strength training",
  openGraph: {
    title: "FitZone Gym - Transform Your Body & Mind",
    description:
      "Premium fitness center with expert trainers and modern facilities",
    type: "website",
  },
};

export default function GymLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="system" storageKey="mest-showcase-theme">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
