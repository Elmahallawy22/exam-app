import React from "react";
import ChangePasswordForm from "../_components/change-password-form";
import { getTranslations } from "next-intl/server";

// Title and description for SEO and social sharing
export async function generateMetadata() {
  // server-side translation
  const t = await getTranslations("dashboard.change-password");

  return {
    title: t("super-title"),
    description: t("super-description"),
  };
}

export default function Page() {
  return (
    <section className="col-span-7 p-6 bg-white">
      <ChangePasswordForm />
    </section>
  );
}
