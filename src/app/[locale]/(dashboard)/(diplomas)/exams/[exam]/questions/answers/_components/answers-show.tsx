"use client";
import QuestionsProgress from "../../_components/questions-progress";
import { useSearchParams } from "next/navigation";
import AnswersContent from "./answers-content";
import AnswersFooter from "./answers-footer";

export default function AnswersShow() {
  // Navigation
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <section className="p-6 bg-white">
      {/* Answers Header */}
      <QuestionsProgress id={id ?? ""} />
      {/* Answers Content */}
      <AnswersContent />
      {/* Answers Footer */}
      <AnswersFooter />
    </section>
  );
}
