import z from "zod";
import { Translatons } from "../types/global";

export const loginSchema = (t: Translatons) => 
  z.object({
    email: z.email(t("email-required")),
    password: z.string(t("password-required")).min(8, t("password-length")),
  });


export const registerSchema = (t: Translatons) => 
  z.object({
    firstName: z.string().min(3, t("first-name-length")),
    lastName: z.string().min(3, t("last-name-length")),
    username: z.string().min(3, t("user-name-length")),
    email: z.email(t("email-required")),
    phone: z
      .string()
      .min(1, t("phone-min"))
      .max(13, t("phone-max"))
      .regex(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/, t("phone-valid")),
    password: z.string(t("password-required")).min(8, t("password-length")),
    rePassword: z.string(t("re-password-valid")),
  });
