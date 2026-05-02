"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { changePasswordSchema } from "@/lib/schemes/account.schema";
import { ChangePasswordFields } from "@/lib/types/account";
import useChangePassword from "@/hooks/use-change-password";
import Feedback from "@/components/shared/feedback";

export default function ChangePasswordForm() {
  //translation
  const t = useTranslations("account.change-password");

  // mutation
  const { changePassword, isPending, error } = useChangePassword();

  // form
  const form = useForm<ChangePasswordFields>({
    resolver: zodResolver(changePasswordSchema(t)),
    defaultValues: {
      oldPassword: "",
      password: "",
      rePassword: "",
    },
  });

  // submit handler
  const onSubmit: SubmitHandler<ChangePasswordFields> = (values) => {
    changePassword({ ...values });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* current password */}
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>{t("current-password")}</FormLabel>
              {/* Field */}
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              {/* message */}
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button className="rounded-none" disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)}>
          {t("update-password")}
        </Button>
      </form>
    </Form>
  );
}
