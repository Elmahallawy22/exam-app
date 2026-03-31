import PageTitle from "@/components/shared/page-title";
import { BookOpenCheck } from "lucide-react";
import React from "react";
import ExamsShow from "./_components/exams-show";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

// Title and description for SEO and social sharing
export async function generateMetadata() {
  // server-side translation
  const t = await getTranslations("dashboard.exams");

  return {
    title: t("super-title"),
    description: t("super-description"),
  };
}

export default function Page() {
  // translation
  const t = useTranslations("dashboard.exams");

  return (
    <main>
      {/* page title */}
      <PageTitle icon={BookOpenCheck} title={t("title")} isBack={true} back="/" />
      {/* exams show */}
      <ExamsShow />
    </main>
  );
}
