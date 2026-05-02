import { changePasswordAction } from "@/lib/actions/change-password.action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useChangePassword() {
  // mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: { oldPassword: string; password: string; rePassword: string }) => {
      const payload = await changePasswordAction({
        oldPassword: fields.oldPassword,
        password: fields.password,
        rePassword: fields.rePassword,
      });

      if ("code" in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: () => {
      toast.success("Successful Change Password");
    },
  });

  return { changePassword: mutate, isPending, error };
}
