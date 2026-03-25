"use client";

import React from "react";
import ExamsCard from "./exams-card";
import { useExams } from "@/hooks/use-exams";
import Feedback from "@/components/shared/feedback";
import { Spinner } from "@/components/ui/spinner";

export default function ExamsShow() {
  // query
  const { payload, error, isLoading } = useExams();

  // if loading
  if (isLoading) {
    return (
      <section className=" flex justify-center">
        <Spinner />
      </section>
    );
  }

  // if error
  if (error) {
    return <Feedback className="mt-5">{error.message}</Feedback>;
  }

  return (
    <section className="bg-white p-6 space-y-4 h-[calc(100vh-200px)]">
      {payload?.exams.map((exam) => (
        <div key={exam._id}>
          <ExamsCard title={exam.title} numberOfQuestions={10} duration={20} />
        </div>
      ))}
    </section>
  );
}
