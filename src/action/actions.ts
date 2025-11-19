// src/app/health/gym/actions.ts

"use server";

// Define a specific type for the form state and export it
export type FormState = {
  status: "success" | "error" | "";
  message: string;
};

// --- Email Sending Setup (Optional, can be uncommented later) ---
// const resend = new Resend(process.env.RESEND_API_KEY);
// const ADMIN_EMAIL = "your-admin-email@example.com";

/**
 * Server Action to handle class booking for guest users.
 * @param prevState - The previous state of the form.
 * @param formData - The data submitted from the form.
 * @returns A promise that resolves to the new form state.
 */
export async function bookClassAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Extract data from the form
  const className = formData.get("className") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || "Not provided";

  // --- Server-side Validation ---
  if (!className || !name || !email) {
    return {
      status: "error",
      message: "Please fill out all required fields (Name and Email).",
    };
  }

  // Email validation using a simple regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  // Log the booking details on the server
  console.log("--- New Class Booking Received ---");
  console.log({
    Class: className,
    Name: name,
    Email: email,
    Phone: phone,
  });
  console.log("---------------------------------");

  // Simulate an API call or database operation
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simulate a random success/failure
  if (Math.random() > 0.1) {
    // 90% chance of success
    return {
      status: "success",
      message: `Thanks, ${name}! Your spot for "${className}" is confirmed.`,
    };
  } else {
    // 10% chance of failure
    return {
      status: "error",
      message: `Sorry, something went wrong while booking. Please try again.`,
    };
  }
}

/**
 * Server Action to handle contact form submissions.
 * @param prevState - The previous state of the form.
 * @param formData - The data submitted from the form.
 * @returns A promise that resolves to the new form state.
 */
export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Extract data from the form
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const phone = (formData.get("phone") as string) || "Not provided";

  // --- Server-side Validation ---
  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill out all required fields.",
    };
  }

  // Log the submission details on the server
  console.log("--- New Contact Form Submission ---");
  console.log({
    Name: name,
    Email: email,
    Phone: phone,
    Message: message,
  });
  console.log("-----------------------------------");

  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Always return success for the contact form for better UX
  return {
    status: "success",
    message: `Thanks for your message, ${name}! We'll get back to you soon.`,
  };
}

/**
 * Server Action for Membership Signup.
 * @param prevState - The previous state of the form.
 * @param formData - The data submitted from the form.
 * @returns A promise that resolves to the new form state.
 */
export async function startMembershipAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const planName = formData.get("planName") as string;
  const planPrice = formData.get("planPrice") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || "Not provided";

  // Basic server-side validation
  if (!planName || !name || !email) {
    return {
      status: "error",
      message: "Please fill out all required fields.",
    };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  console.log("--- New Membership Signup ---");
  console.log({
    Plan: `${planName} ($${planPrice}/month)`,
    Name: name,
    Email: email,
    Phone: phone,
  });
  console.log("----------------------------");

  // Simulate API call (e.g., payment gateway, DB entry)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In a real app, you would handle payment here.
  // We'll simulate a successful signup.
  return {
    status: "success",
    message: `Welcome, ${name}! Your ${planName} plan is now active.`,
  };
}
