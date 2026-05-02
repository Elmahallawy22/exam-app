import React from "react";
import ProfileForm from "../_components/profile-form";
import { getTranslations } from "next-intl/server";

// Title and description for SEO and social sharing
export async function generateMetadata() {
  // server-side translation
  const t = await getTranslations("account.profile");

  return {
    title: t("super-title"),
    description: t("super-description"),
  };
}

export default function Page() {
  return (
    <section className="col-span-7 p-6 bg-white">
      <ProfileForm />
    </section>
  );
}
