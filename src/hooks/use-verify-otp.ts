import {  verifyOtpAction } from "@/lib/actions/auth.action";
import { OtpStepFields } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";

export default function useVerifyOtp() {
  // mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: OtpStepFields) => {
      const payload = await verifyOtpAction(fields);

      if ("code" in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
  });

  return { verifyOtp : mutate, isPending, error };
}