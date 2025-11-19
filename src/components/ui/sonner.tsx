// src/components/ui/sonner.tsx
"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import { useTheme } from "@/provider/ThemeProvider"; // ✅ Changed to your custom ThemeProvider

const Toaster = ({ ...props }: ToasterProps) => {
  // ✅ Using your custom useTheme hook
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: { 
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-900 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-mest-gray-2 dark:group-[.toaster]:text-mest-gray-10 dark:group-[.toaster]:border-mest-gray-3",
          description:
            "group-[.toast]:text-slate-500 dark:group-[.toast]:text-mest-gray-9",
          actionButton:
            "group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50 dark:group-[.toast]:bg-mest-gray-10 dark:group-[.toast]:text-mest-gray-1",
          cancelButton:
            "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 dark:group-[.toast]:bg-mest-gray-3 dark:group-[.toast]:text-mest-gray-9",
          success:
            "!bg-mest-green-6/10 !text-mest-green-6 dark:!bg-mest-green-7/10 dark:!text-mest-green-7 !border-mest-green-6/30",
          error:
            "!bg-mest-red-6/10 !text-mest-red-6 dark:!bg-mest-red-7/10 dark:!text-mest-red-7 !border-mest-red-6/30",
          warning:
            "!bg-mest-amber-6/10 !text-mest-amber-6 dark:!bg-mest-amber-7/10 dark:!text-mest-amber-7 !border-mest-amber-6/30",
          info: "!bg-mest-blue-6/10 !text-mest-blue-6 dark:!bg-mest-blue-7/10 dark:!text-mest-blue-7 !border-mest-blue-6/30",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
