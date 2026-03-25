"use client";

import { useSubjects } from "@/hooks/use-subjects";
import DiplomaCard from "./diploma-card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Feedback from "@/components/shared/feedback";
import { useTranslations } from "next-intl";

export default function DiplomasShow() {
  // translation
  const t = useTranslations("dashboard.diplomas");

  // query
  const { payload, isLoading, error, isFetchingNextPage, hasNextPage, fetchNextPage } = useSubjects();

  // variables
  const subjects = payload?.pages.flatMap((page) => page.subjects) ?? [];

  // if loading
  if (isLoading) {
    return (
      <section className="grid grid-cols-9 gap-2.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="col-span-3 animate-pulse bg-gray-200 h-24 rounded" />
        ))}
      </section>
    );
  }

  // if error
  if (error) {
    return <Feedback className="mt-5">{error.message}</Feedback>;
  }

  return (
    <section className="grid grid-cols-9 gap-2.5">
      {/* show diplomas  */}
      {subjects.map((subject) => (
        <div className="col-span-3" key={subject._id}>
          <DiplomaCard icon={subject.icon} name={subject.name} />
        </div>
      ))}
      {/* show more button */}
      <Button
        disabled={isLoading || isFetchingNextPage || !hasNextPage}
        className="bg-gray-50 text-gray-600 col-span-9 flex flex-col gap-1 mt-6 h-16"
        variant="ghost"
        onClick={() => fetchNextPage()}
      >
        {hasNextPage ? t("scroll") : t("end")}
        <span>{hasNextPage && <ChevronDown />}</span>
      </Button>
    </section>
  );
}
