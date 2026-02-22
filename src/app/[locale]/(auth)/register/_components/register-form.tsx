"use client";

import Feedback from "@/components/shared/feedback";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import useRegister from "@/hooks/use-register";
import { registerSchema } from "@/lib/schemes/auth.schema";
import { RegisterFields } from "@/lib/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { parsePhoneNumber } from "react-phone-number-input";

export default function RegisterForm() {
  // translations
  const t = useTranslations("register");
  // mutation
  const { register, isPending, error } = useRegister();

  const form = useForm<RegisterFields>({
    resolver: zodResolver(registerSchema(t)),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterFields> = (values: RegisterFields) => {
    const parsedPhoneNumber = parsePhoneNumber(values.phone);

    values.phone = `0${parsedPhoneNumber?.nationalNumber}`;

    register(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        {/* firstName */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>{t('first-name')}</FormLabel>
              {/* Field */}
              <FormControl>
                <Input placeholder="Ahmed" {...field} autoComplete="firstName" />
              </FormControl>
              {/* message */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* lastName */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>{t('last-name')}</FormLabel>
              {/* Field */}
              <FormControl>
                <Input placeholder="Mohamed" {...field} autoComplete="lastName" />
              </FormControl>
              {/* message */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* userName */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>{t('user-name')}</FormLabel>
              {/* Field */}
              <FormControl>
                <Input placeholder="user123" {...field} autoComplete="userName" />
              </FormControl>
              {/* message */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>{t('email')}</FormLabel>
              {/* Field */}
              <FormControl>
                <Input placeholder="user@example.com" {...field} autoComplete="email" />
              </FormControl>
              {/* message */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>{t('phone')}</FormLabel>
              {/* Field */}
              <FormControl>
                <PhoneInput placeholder="01000000000" {...field} autoComplete="phone" />
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
            <FormItem className="col-span-2">
              <FormLabel>{t('password')}</FormLabel>
              {/* Field */}
              <FormControl>
                <Input type="password" placeholder="********" {...field} autoComplete="current-password" />
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
              <FormLabel>{t('confirm-password')}</FormLabel>
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
        <Button disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)} className="mt-4 col-span-2">
          Create Account
        </Button>
      </form>
    </Form>
  );
}
