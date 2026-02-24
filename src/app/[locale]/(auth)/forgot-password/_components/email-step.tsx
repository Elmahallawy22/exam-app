"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { EmailStepFields, ForgotPasswordSteps } from "@/lib/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailStepSchema } from "@/lib/schemes/auth.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import { FORGOT_PASSWORD_STEPS } from "@/lib/constants/auth.constant";
import { MoveRight } from "@/components/icons/MoveRight";
import useSendOtp from "@/hooks/use-send-otp";
import Feedback from "@/components/shared/feedback";

type EmailStepProps = {
  email: string;
  setStep: Dispatch<SetStateAction<ForgotPasswordSteps>>;
  setEmail: Dispatch<SetStateAction<string>>;
};

export default function EmailStep({ email, setStep, setEmail }: EmailStepProps) {
  //translation
  const t = useTranslations("login");

  // mutation
  const { sendOtp, isPending, error } = useSendOtp();

  // form
  const form = useForm<EmailStepFields>({
    resolver: zodResolver(emailStepSchema(t)),
    defaultValues: {
      email: email || "",
    },
  });

  const onSubmit: SubmitHandler<EmailStepFields> = (values: EmailStepFields) => {
    sendOtp(values, {
      onSuccess: () => {
        setStep(FORGOT_PASSWORD_STEPS.OTP);
        setEmail(values.email);
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("email")}</FormLabel>
              {/* Field */}
              <FormControl>
                <Input placeholder={t("email-placeholder")} {...field} autoComplete="email" />
              </FormControl>
              {/* message */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* feedback */}
        <Feedback className="col-span-2 mt-6">{error?.message}</Feedback>
        {/* submit button */}
        <Button disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)}>
          {t("continue")} <MoveRight />
        </Button>
      </form>
    </Form>
  );
}
