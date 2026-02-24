import z from "zod";
import { emailStepSchema, loginSchema, otpStepSchema, registerSchema, resetPasswordStepSchema } from "../schemes/auth.schema";
import { FORGOT_PASSWORD_STEPS } from "../constants/auth.constant";

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

export type LoginFields = z.infer<ReturnType<typeof loginSchema>>;

export type RegisterFields = z.infer<ReturnType<typeof registerSchema>>;

export type EmailStepFields = z.infer<ReturnType<typeof emailStepSchema>>;

export type OtpStepFields = z.infer<ReturnType<typeof otpStepSchema>>;

export type ResetPasswordStepFields = z.infer<ReturnType<typeof resetPasswordStepSchema>>;

export type ForgotPasswordSteps = (typeof FORGOT_PASSWORD_STEPS)[keyof typeof FORGOT_PASSWORD_STEPS];
