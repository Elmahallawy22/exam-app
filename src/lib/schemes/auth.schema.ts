import z from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter your email"),
  password: z.string("Please enter your password").min(8, "Password must be at least 8 characters long"),
});

export const registerSchema = z.object({
  firstName: z.string().min(3, "FirstName at least 3 character "),
  lastName: z.string().min(3, "lastName at least 3 character "),
  username: z.string().min(3, "userName at least 3 character "),
  email: z.email("Please enter your email"),
  phone: z
    .string()
    .min(1, "Phone is required")
    .max(13, "Phone is more than invaled")
    .regex(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/, "Please enter a valid phone number"),
  password: z.string("Please enter your password").min(8, "Password must be at least 8 characters long"),
  rePassword: z.string("Confirm Password is not equal password"),
});
