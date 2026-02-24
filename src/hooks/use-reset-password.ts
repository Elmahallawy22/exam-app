import { useRouter } from "@/i18n/navigation";
import { resetPasswordAction } from "@/lib/actions/auth.action";
import { ResetPasswordStepFields } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useResetPassword() {
  // router
  const router = useRouter();
  // mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: ResetPasswordStepFields & { email: string }) => {
      const payload = await resetPasswordAction({
        email: fields.email,
        newPassword: fields.password,
      });

      if ("code" in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: () => {
      toast.success("Successful Reset New Password");

      router.push("/login");
    },
  });

  return { resetpassword: mutate, isPending, error };
}
