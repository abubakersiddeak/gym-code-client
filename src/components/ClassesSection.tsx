
"use client";

import { useState, useEffect, useRef, useActionState } from "react";
import Image from "next/image";
import Form from "next/form";
import { useFormStatus } from "react-dom";
import { Clock, TrendingUp, Loader } from "lucide-react";

import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { bookClassAction, type FormState } from "../action/actions";
import { gymData } from "@/data";

// Define a type for a single class item
type ClassItem = (typeof gymData.classes)[0];

// Class level colors
const levelColors: Record<string, { badge: string; text: string }> = {
  "All Levels": {
    badge: "bg-mest-blue-6 text-white",
    text: "text-mest-blue-6",
  },
  Beginner: { badge: "bg-mest-green-6 text-white", text: "text-mest-green-6" },
  Intermediate: {
    badge: "bg-mest-amber-6 text-white",
    text: "text-mest-amber-6",
  },
  Advanced: { badge: "bg-mest-red-6 text-white", text: "text-mest-red-6" },
};

// Submit Button Component
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="bg-mest-blue-6 hover:bg-mest-blue-7"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Confirming...
        </>
      ) : (
        "Confirm Booking"
      )}
    </Button>
  );
}

export default function ClassesSection() {
  const { classes } = gymData;
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const initialState: FormState = { status: "", message: "" };
  const [state, formAction] = useActionState(bookClassAction, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.status === "success") {
        toast.success(state.message);
        formRef.current?.reset(); // Reset form on success
        setTimeout(() => setIsDialogOpen(false), 500); // Close dialog after a short delay
      } else if (state.status === "error") {
        toast.error(state.message);
      }
    }
  }, [state]);

  const handleOpenDialog = (classItem: ClassItem) => {
    setSelectedClass(classItem);
    setIsDialogOpen(true);
  };

  return (
    <>
      <section
        id="classes"
        className="py-10 lg:py-14 bg-white dark:bg-darkbg-1 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-mest-blue-6 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-mest-blue-6 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 text-mest-blue-6 rounded-full text-sm font-semibold mb-4 border border-mest-blue-6/20">
                Our Classes
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
                Our Classes
              </h2>
              <p className="text-lg text-mest-gray-6 dark:text-mest-gray-7 max-w-2xl mx-auto">
                From yoga to high-intensity training, find the perfect class for
                your fitness level
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => {
              const levelColor =
                levelColors[classItem.level] || levelColors["All Levels"];
              return (
                <ScrollAnimationWrapper key={index} delay={index * 100}>
                  <article className="group bg-linear-to-br from-mest-blue-6/5 to-mest-blue-6/10 dark:from-mest-blue-6/10 dark:to-mest-blue-6/5 rounded-2xl overflow-hidden border border-mest-blue-6/30 hover:border-mest-blue-6/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={classItem.image}
                        alt={classItem.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 ${levelColor.badge} text-sm font-semibold rounded-full backdrop-blur-sm shadow-lg`}
                        >
                          {classItem.level}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 relative">
                      <div className="absolute inset-0 bg-white/50 dark:bg-mest-gray-1/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-b-2xl" />
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-3 text-mest-gray-1 dark:text-mest-gray-10 group-hover:text-mest-blue-6 transition-colors duration-300">
                          {classItem.name}
                        </h3>
                        <p className="text-mest-gray-6 dark:text-mest-gray-7 mb-4 line-clamp-2">
                          {classItem.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-mest-gray-6 dark:text-mest-gray-7 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-mest-blue-6" />
                            <span>{classItem.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp
                              className={`w-4 h-4 ${levelColor.text}`}
                            />
                            <span>{classItem.level}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleOpenDialog(classItem)}
                          className="w-full py-3 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 hover:bg-mest-blue-6 text-mest-blue-6 hover:text-white rounded-lg font-semibold transition-all duration-300 border border-mest-blue-6/20 hover:border-mest-blue-6"
                        >
                          Book Class
                        </button>
                      </div>
                    </div>
                  </article>
                </ScrollAnimationWrapper>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white dark:bg-mest-gray-2 border-mest-blue-6/30">
          {selectedClass && (
            <Form ref={formRef} action={formAction}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-mest-gray-1 dark:text-white">
                  Book: {selectedClass.name}
                </DialogTitle>
                <DialogDescription className="text-mest-gray-6 dark:text-mest-gray-7">
                  Enter your details to reserve your spot.
                </DialogDescription>
              </DialogHeader>

              <input
                type="hidden"
                name="className"
                value={selectedClass.name}
              />

              <div className="py-4 space-y-4">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-mest-gray-1 dark:text-mest-gray-10"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="mt-1 w-full px-3 py-2 bg-white dark:bg-mest-gray-3 border border-mest-blue-6/20 rounded-md focus:outline-none focus:ring-2 focus:ring-mest-blue-6"
                  />
                </div>
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-mest-gray-1 dark:text-mest-gray-10"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1 w-full px-3 py-2 bg-white dark:bg-mest-gray-3 border border-mest-blue-6/20 rounded-md focus:outline-none focus:ring-2 focus:ring-mest-blue-6"
                  />
                </div>
                {/* Phone Input (Optional) */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-mest-gray-1 dark:text-mest-gray-10"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="mt-1 w-full px-3 py-2 bg-white dark:bg-mest-gray-3 border border-mest-blue-6/20 rounded-md focus:outline-none focus:ring-2 focus:ring-mest-blue-6"
                  />
                </div>
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <SubmitButton />
              </DialogFooter>
            </Form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
