import PageTitle from "@/components/shared/page-title";
import { BookOpenCheck } from "lucide-react";
import React from "react";
import ExamsShow from "./_components/exams-show";
import { useTranslations } from "next-intl";

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
