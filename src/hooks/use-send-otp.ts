import { sendOtpAction } from "@/lib/actions/auth.action";
import { EmailStepFields } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";

export default function useSendOtp() {
  // mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: EmailStepFields) => {
      const payload = await sendOtpAction(fields);

      if ("code" in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
  });

  return { sendOtp: mutate, isPending, error };
}
