"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { changePasswordSchema } from "@/lib/schemes/account.schema";
import { ChangePasswordFields } from "@/lib/types/account";

export default function ChangePasswordForm() {
  //translation
  const t = useTranslations("dashboard.change-password");

  // form
  const form = useForm<ChangePasswordFields>({
    resolver: zodResolver(changePasswordSchema(t)),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      rePassword: "",
    },
  });

  // submit handler
  const onSubmit: SubmitHandler<ChangePasswordFields> = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* current password */}
        <FormField
          control={form.control}
          name="currentPassword"
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
          name="newPassword"
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
        {/* submit button */}
        <Button className="rounded-none" disabled={!form.formState.isSubmitting}>
          {t("update-password")}
        </Button>
      </form>
    </Form>
  );
}
