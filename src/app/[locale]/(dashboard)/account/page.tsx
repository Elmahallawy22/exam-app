import { getTranslations } from 'next-intl/server';
import React from 'react'

// Title and description for SEO and social sharing
export async function generateMetadata() {
  // server-side translation
  const t = await getTranslations("dashboard.account");

  return {
    title: t("super-title"),
    description: t("super-description"),
  };
}

export default function Page() {
  return (
    <div>
      account
    </div>
  )
}
