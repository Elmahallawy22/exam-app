import z from "zod";
import { Translatons } from "../types/global";
// profile schema
export const profileSchema = (t: Translatons) =>
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
  });

// change password schema
export const changePasswordSchema = (t: Translatons) =>
  z
    .object({
      currentPassword: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, {
        message: t("password-required"),
      }),
      newPassword: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, {
        message: t("password-required"),
      }),
      rePassword: z.string(t("re-password-required")),
    })
    .refine((values) => values.newPassword === values.rePassword, {
      message: t("re-password-valid"),
      path: ["rePassword"],
    });
