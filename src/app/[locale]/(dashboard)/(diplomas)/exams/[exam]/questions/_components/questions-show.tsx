"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import QuestionsProgress from "./questions-progress";
import QuestionsFooter from "./questions-footer";
import QuestionsContent from "./questions-content";

export default function QuestionsShow() {
  // Navigation
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // State
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <section className="p-6 bg-white">
      {/* Question Header */}
      <QuestionsProgress questionNumber={questionNumber} id={id ?? ""} />
      {/* Question Content */}
      <QuestionsContent id={id ?? ""} questionNumber={questionNumber} answers={answers} setAnswers={setAnswers} />
      {/* Question Footer */}
      <QuestionsFooter questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} id={id ?? ""} answers={answers} />
    </section>
  );
}
