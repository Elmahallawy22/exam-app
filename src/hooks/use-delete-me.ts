import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteMeAction } from "@/lib/actions/delete-me.action";
import { signOut } from "next-auth/react";
import { useLocale } from "next-intl";

export default function useDeleteMe() {
  // router
  const locale = useLocale();

  // mutation
  const { mutate, error } = useMutation({
    mutationFn: async () => {
      const payload = await deleteMeAction();

      if ("code" in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: () => {
      toast.success("Successful Deleting Account");
      
      signOut({ callbackUrl: `/${locale}/login` });
    },
  });

  return { deleteMe: mutate, error };
}
