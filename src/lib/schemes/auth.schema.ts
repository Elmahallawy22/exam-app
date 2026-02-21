import z from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter your email"),
  password: z.string("Please enter your password").min(8, "Password must be at least 8 characters long"),
});
