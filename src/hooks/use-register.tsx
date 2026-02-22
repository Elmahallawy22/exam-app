import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { RegisterFields } from "@/lib/types/auth";
import { registerAction } from "@/lib/actions/register.action";
import { toast } from "sonner";

export default function useRegister() {
  // router
  const router = useRouter();

  // mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: RegisterFields) => {
      const payload = await registerAction(fields);

      if ("code" in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: () => {
      toast.success("Successful Registertion");
      
      router.push("/login");
    },
  });

  return { register: mutate, isPending, error };
}
