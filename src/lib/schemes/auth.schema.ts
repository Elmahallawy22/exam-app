import z from "zod";
import { Translatons } from "../types/global";

export const loginSchema = (t: Translatons) =>
  z.object({
    email: z.email(t("email-required")),
    password: z.string(t("password-required")).min(8, t("password-length")),
  });

export const registerSchema = (t: Translatons) =>
  z
    .object({
      firstName: z.string().min(3, t("first-name-length")),
      lastName: z.string().min(3, t("last-name-length")),
      username: z.string().min(3, t("user-name-length")),
      email: z.email(t("email-required")),
      phone: z
        .string()
        .min(1, t("phone-min"))
        .max(13, t("phone-max"))
        .regex(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/, t("phone-valid")),
      password: z
        .string(t("password-required"))
        .min(8, t("password-length"))
        .regex(/[A-Z]/, t("password-uppercase"))
        .regex(/[a-z]/, t("password-lowercase"))
        .regex(/[@$!%#*?&]/, t("password-special")),
      rePassword: z.string(t("re-password-required")),
    })
    .refine((values) => values.password === values.rePassword, {
      message: t("re-password-valid"),
      path: ["rePassword"],
    });

// forgot-password schemas...
export const emailStepSchema = (t: Translatons) => loginSchema(t).pick({ email: true });

export const otpStepSchema = (t: Translatons) =>
  z.object({
    otp: z.string().min(6, t("otp-required")),
  });

export const resetPasswordStepSchema = (t: Translatons) =>
  z.object({
    password: z
      .string(t("password-required"))
      .min(8, t("password-length"))
      .regex(/[A-Z]/, t("password-uppercase"))
      .regex(/[a-z]/, t("password-lowercase"))
      .regex(/[@$!%#*?&]/, t("password-special")),
    rePassword: z.string(t("re-password-required")),
  })
  .refine((values) => values.password === values.rePassword, {
    message: t("re-password-valid"),
    path: ["rePassword"],
  });
