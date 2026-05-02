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
import DeleteAccountPopup from "./delete-account-popup";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import useEditProfile from "@/hooks/use-edit-profile";
import Feedback from "@/components/shared/feedback";

function toE164(phone: string): string {
  if (!phone) return "";
  if (phone.startsWith("+")) return phone;
  if (phone.startsWith("0")) return `+20${phone.slice(1)}`;
  return `+20${phone}`;
}

export default function ProfileForm() {
  // translations
  const t = useTranslations("account.profile");
  // Context
  const { data } = useSession();
  // Hooks
  const user = useMemo(() => ({ user: data?.user }), [data?.user]);

  // mutation
  const { editProfile, isPending, error } = useEditProfile();

  const form = useForm<ProfileFields>({
    resolver: zodResolver(profileSchema(t)),
    defaultValues: {
      firstName: user?.user?.firstName ?? "",
      lastName: user?.user?.lastName ?? "",
      username: user?.user?.username ?? "",
      email: user?.user?.email ?? "",
      phone: toE164(user?.user?.phone ?? ""),
    },
  });

  // Submit Action
  const onSubmit: SubmitHandler<ProfileFields> = (values: ProfileFields) => {
    // Parse the phone number to ensure it's in the correct format
    const parsedPhoneNumber = parsePhoneNumber(values.phone);
    // If the phone number is valid, format it to the desired format (e.g., starting with '0')
    values.phone = `0${parsedPhoneNumber?.nationalNumber}`;

    editProfile(values);
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
        {/* feedback */}
        <Feedback className="col-span-2 mt-6">{error?.message}</Feedback>
        {/* delete account component */}
        <DeleteAccountPopup />
        {/* submit button */}
        <Button className="mt-4 col-span-1 rounded-none" disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)}>
          {t("submit")}
        </Button>
      </form>
    </Form>
  );
}
