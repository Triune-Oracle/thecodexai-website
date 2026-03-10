import { z } from 'zod';

/**
 * Email validation schema
 */
export const emailSchema = z
  .string()
  .email('Please enter a valid email address')
  .min(5, 'Email must be at least 5 characters')
  .max(255, 'Email must be less than 255 characters');

/**
 * Waitlist form validation schema
 */
export const waitlistFormSchema = z.object({
  email: emailSchema,
  name: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 2, 'Name must be at least 2 characters'),
});

export type WaitlistFormData = z.infer<typeof waitlistFormSchema>;

/**
 * Task submission schema
 */
export const taskSubmissionSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be less than 200 characters'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(2000, 'Description must be less than 2000 characters'),
  email: emailSchema,
});

export type TaskSubmissionData = z.infer<typeof taskSubmissionSchema>;

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  try {
    emailSchema.parse(email);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate waitlist form data
 */
export function validateWaitlistForm(data: unknown) {
  try {
    return waitlistFormSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        valid: false,
        errors: error.flatten().fieldErrors,
      };
    }
    throw error;
  }
}

/**
 * Validate task submission data
 */
export function validateTaskSubmission(data: unknown) {
  try {
    return taskSubmissionSchema.parse(data);
    return { valid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        valid: false,
        errors: error.flatten().fieldErrors,
      };
    }
    throw error;
  }
}
