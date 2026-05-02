"use client";

import { Link } from "@/i18n/navigation";
import { FolderSearch, RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function AnswersFooter() {
  // Translation
  const t = useTranslations("dashboard.answers");

  // Navigation
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // varaible
  const title = sessionStorage.getItem("title-of-subject") || "";

  return (
    <div className="flex gap-4 py-6">
      <Link href={`/exams/${title}/questions?id=${id}`} className="bg-gray-200 text-gray-800 flex justify-center flex-1 p-4 gap-2.5">
        <RotateCcw />
        {t("restart")}
      </Link>
      <Link href={"/"} className="bg-blue-600 text-white flex justify-center flex-1 p-4 gap-2.5">
        <FolderSearch />
        {t("explore")}
      </Link>
    </div>
  );
}
