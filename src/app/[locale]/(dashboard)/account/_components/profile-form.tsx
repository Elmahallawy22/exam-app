"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { profileSchema } from "@/lib/schemes/account.schema";
import { ProfileFields } from "@/lib/types/account";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { parsePhoneNumber } from "react-phone-number-input";

export default function ProfileForm() {
  // translations
  const t = useTranslations("dashboard.profile");

  const form = useForm<ProfileFields>({
    resolver: zodResolver(profileSchema(t)),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<ProfileFields> = (values: ProfileFields) => {
    // Parse the phone number to ensure it's in the correct format
    const parsedPhoneNumber = parsePhoneNumber(values.phone);
    // If the phone number is valid, format it to the desired format (e.g., starting with '0')
    values.phone = `0${parsedPhoneNumber?.nationalNumber}`;
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
              <FormLabel>{t("first-name")}</FormLabel>
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
              <FormLabel>{t("last-name")}</FormLabel>
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
              <FormLabel>{t("user-name")}</FormLabel>
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
              <FormLabel>{t("email")}</FormLabel>
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
              <FormLabel>{t("phone")}</FormLabel>
              {/* Field */}
              <FormControl>
                <PhoneInput placeholder="01000000000" {...field} autoComplete="phone" />
              </FormControl>
              {/* message */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* delete account button */}
        <Button className="mt-4 col-span-1 bg-red-50 text-red-600 hover:bg-red-100">{t("delete-account")}</Button>

        {/* submit button */}
        <Button disabled={!form.formState.isSubmitting} className="mt-4 col-span-1">
          {t("submit")}
        </Button>
      </form>
    </Form>
  );
}
