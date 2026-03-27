"use client";
import PageTitle from "@/components/shared/page-title";
import { CircleQuestionMark } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function QuestionsHeader() {
  // translation
  const t = useTranslations("dashboard.questions");

  // Navigation
  const pathname = usePathname();
  
  // variables
  const segments = pathname.split("/");
  const title = segments[3] ? decodeURIComponent(segments[3]) : "";

  return (
    <>
      <PageTitle icon={CircleQuestionMark} title={`[${title}] ${t("title")}`} isBack={true} back="/exams" />
    </>
  );
}
