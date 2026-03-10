import { LoginFields } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function useLogin() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: LoginFields) => {
      const respose = await signIn("credentials", {
        email: fields.email,
        password: fields.password,
        redirect: false,
      });

      if (respose?.error) {
        throw new Error(respose.error);
      }

      return respose;
    },
    onSuccess: () => {
      const callbackUrl = new URLSearchParams(location.search).get("callbackUrl") || "/";

      // redirect location
      location.href = callbackUrl;
    },
  });
  return { login: mutate, isPending, error };
}
