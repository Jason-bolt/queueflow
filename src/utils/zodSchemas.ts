import { z } from "zod";

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
);

export const SignupUserSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(passwordValidation, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      }),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });

export const SigninUserSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(passwordValidation, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
});

export const NewQueueSchema = z.object({
  name: z.string().trim().min(1, "Queue name is required"),
  description: z.string().optional(),
  isEmailRequired: z.boolean(),
  maxSize: z.number().min(1, "Max size must be at least 1"),
  expiresAt: z.coerce.date().optional(),
  queuePrefix: z.string().optional(),
});

export const OrganizationSettingsSchema = z.object({
  name: z.string().trim().min(1, "Organization name is required"),
  email: z.string().email("Invalid email address").trim(),
  defaultQueuePrefix: z.string().max(5),
});
