"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { ForgotPasswordSteps, OtpStepFields } from "@/lib/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpStepSchema } from "@/lib/schemes/auth.schema";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import useVerifyOtp from "@/hooks/use-verify-otp";
import Feedback from "@/components/shared/feedback";
import { FORGOT_PASSWORD_STEPS } from "@/lib/constants/auth.constant";
import { Dispatch, SetStateAction } from "react";

type OtpStepProps = {
  setStep: Dispatch<SetStateAction<ForgotPasswordSteps>>;
};

export default function OtpStep({ setStep }: OtpStepProps) {
  //translation
  const t = useTranslations("otp-step");

  // mutation
  const { verifyOtp, isPending, error } = useVerifyOtp();

  // form
  const form = useForm<OtpStepFields>({
    resolver: zodResolver(otpStepSchema(t)),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit: SubmitHandler<OtpStepFields> = (values) => {
    verifyOtp(values, {
      onSuccess: () => {
        setStep(FORGOT_PASSWORD_STEPS.NEW_PASSWORD);
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10 items-center">
        {/* otp */}
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center gap-2">
              {/* Field */}
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              {/* message */}
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-gray-500 text-sm font-medium">
          {t.rich("resend", {
            button: (chunk) => <button className="text-blue-600">{chunk}</button>,
          })}
        </p>
        {/* feedback */}
        <Feedback className="col-span-2 mt-6">{error?.message}</Feedback>
        {/* submit button */}
        <Button disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)} className="w-full">
          {t("verify-code")}
        </Button>
      </form>
    </Form>
  );
}
