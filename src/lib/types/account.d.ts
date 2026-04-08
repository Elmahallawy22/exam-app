import { changePasswordSchema, profileSchema } from "../schemes/account.schema";

export type ProfileFields = z.infer<ReturnType<typeof profileSchema>>;

export type ChangePasswordFields = z.infer<ReturnType<typeof changePasswordSchema>>;