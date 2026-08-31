import { z } from "zod";

const phone = z
  .string()
  .trim()
  .min(10, { message: "Enter a valid phone number" })
  .max(18, { message: "Phone number is too long" })
  .regex(/^[0-9+\-\s()]+$/, { message: "Phone can only contain digits and + - ( )" });

const name = z
  .string()
  .trim()
  .min(2, { message: "Name must be at least 2 characters" })
  .max(80, { message: "Name must be less than 80 characters" });

const email = z
  .string()
  .trim()
  .email({ message: "Enter a valid email address" })
  .max(160, { message: "Email is too long" });

export const callbackSchema = z.object({ name, phone });

export const enquirySchema = z.object({
  name,
  phone,
  email,
  service: z.string().trim().min(2, { message: "Select a service" }),
  budget: z.string().trim().min(1, { message: "Select a budget range" }),
  details: z
    .string()
    .trim()
    .min(10, { message: "Tell us a little more (min 10 characters)" })
    .max(1500, { message: "Please keep it under 1500 characters" }),
});

export const bookingSchema = z.object({
  name,
  phone,
  email,
  service: z.string().trim().min(2, { message: "Select a service" }),
  preferredDate: z.string().trim().min(1, { message: "Pick a preferred date" }),
  preferredTime: z.string().trim().min(1, { message: "Pick a preferred time" }),
  notes: z.string().trim().max(1000, { message: "Notes are too long" }).optional().default(""),
});

export const referralSchema = z.object({
  referrerName: name,
  referrerPhone: phone,
  clientName: name,
  clientPhone: phone,
});

export const feedbackSchema = z.object({
  name,
  company: z.string().trim().max(120, { message: "Company name is too long" }).optional().default(""),
  rating: z.number().int().min(1, { message: "Give a rating" }).max(5),
  review: z
    .string()
    .trim()
    .min(10, { message: "Review must be at least 10 characters" })
    .max(1000, { message: "Review must be under 1000 characters" }),
});

export const contactSchema = z.object({
  name,
  phone,
  email,
  service: z.string().trim().min(2, { message: "Select a service" }),
  details: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1500, { message: "Message must be under 1500 characters" }),
});

export const projectSchema = z.object({
  title: z.string().trim().min(2).max(120),
  client: z.string().trim().min(2).max(120),
  category: z.enum(["E-Commerce", "ERP / Software", "Portals"]),
  image: z.string().trim().url({ message: "Enter a valid image URL" }),
  summary: z.string().trim().min(10).max(400),
  challenge: z.string().trim().max(1000).optional().default(""),
  solution: z.string().trim().max(1000).optional().default(""),
  tech: z.string().trim().max(300).optional().default(""),
});

export function firstError(error: unknown): string {
  if (error instanceof z.ZodError) {
    return error.issues[0]?.message ?? "Please check the form";
  }
  return "Something went wrong. Please try again.";
}
