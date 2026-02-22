"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFields } from "@/lib/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schemes/auth.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useLogin from "@/hooks/use-login";
import Feedback from "@/components/shared/feedback";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function LoginForm() {
  //translation
  const t = useTranslations("login");

  // Mutatiion
  const { login, isPending, error } = useLogin();

  // form
  const form = useForm<LoginFields>({
    resolver: zodResolver(loginSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFields> = (values: LoginFields) => {
    login(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("password")}</FormLabel>
              {/* Field */}
              <FormControl>
                <Input type="password" placeholder="********" {...field} autoComplete="current-password" />
              </FormControl>
              {/* message */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* forget password */}
        <Link href={"/forgot-password"} className="text-sm text-blue-600 text-end -mt-1.5">
          {t("forgot-your-password")}
        </Link>
        {/* feedback */}
        <Feedback className="mt-5">{error?.message}</Feedback>
        {/* submit button */}
        <Button disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)} className="mt-4">
          {t("submit")}
        </Button>
      </form>
    </Form>
  );
}
