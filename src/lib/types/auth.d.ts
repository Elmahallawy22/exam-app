import z from "zod";
import { loginSchema, registerSchema } from "../schemes/auth.schema";

export type LoginResponse = {
  token: string;
  user: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    isVerified: boolean;
    createdAt: string;
  };
};

export type LoginFields = z.infer<typeof loginSchema>;

export type RegisterFields = z.infer<typeof registerSchema>;
