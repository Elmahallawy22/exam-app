"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordStepSchema } from "@/lib/schemes/auth.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Feedback from "@/components/shared/feedback";
import useResetPassword from "@/hooks/use-reset-password";
import { ResetPasswordStepFields } from "@/lib/types/auth";
import { Input } from "@/components/ui/input";

export default function NewPassword({ email }: { email: string }) {
  //translation
  const t = useTranslations("register");

  // mutation
  const { resetpassword, isPending, error } = useResetPassword();

  // form
  const form = useForm<ResetPasswordStepFields>({
    resolver: zodResolver(resetPasswordStepSchema(t)),
    defaultValues: {
      password: "",
      rePassword: "",
    },
  });

  const onSubmit: SubmitHandler<ResetPasswordStepFields> = (values) => {
    resetpassword({ ...values, email });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* new password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>{t("new-password")}</FormLabel>
              {/* Field */}
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              {/* message */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* confirmPassword */}
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>{t("confirm-new-password")}</FormLabel>
              {/* Field */}
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              {/* message */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* feedback */}
        <Feedback className="col-span-2 mt-6">{error?.message}</Feedback>
        {/* submit button */}
        <Button disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)}>{t("reset-password")}</Button>
      </form>
    </Form>
  );
}
