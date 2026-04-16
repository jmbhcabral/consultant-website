/** src/features/contact/schemas/contactFormSchema.ts */

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z
    .string()
    .regex(/^[+\d\s\-()]*$/)
    .optional()
    .or(z.literal("")),
  subject: z.string().min(3),
  message: z.string().min(15),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;