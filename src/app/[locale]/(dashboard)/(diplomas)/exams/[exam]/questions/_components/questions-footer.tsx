"use client";

import { ChevronL } from "@/components/icons/ChevronL";
import { ChevronR } from "@/components/icons/ChevronR";
import { useQuestions } from "@/hooks/use-questions";
import { cn } from "@/lib/utils/tailwind-merge";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

type QuestionsFooterProps = {
  id: string;
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  answers: Record<string, string>;
};

export default function QuestionsFooter({ id, questionNumber, setQuestionNumber, answers }: QuestionsFooterProps) {
  // Translation
  const t = useTranslations("dashboard.questions");

  // Navigation
  const router = useRouter();
  const params = useParams();

  // Query
  const { payload } = useQuestions(id ?? "");

  // Variables => This is a flexible choice
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const duration: number = payload?.questions?.[0]?.exam?.duration ?? 0;

  // Functions
  const handleFinish = () => {
    if (!payload?.questions) return;

    // fill unanswered with A5
    const completeAnswers = payload.questions.reduce(
      (acc, question) => {
        acc[question._id] = answers[question._id] ?? "A0";
        return acc;
      },
      {} as Record<string, string>,
    );

    const title = sessionStorage.getItem("title-of-subject") || "";

    sessionStorage.setItem("answers", JSON.stringify(completeAnswers)); // save data

    router.push(`/${params.locale}/exams/${title}/questions/answers?id=${id}`);
  };

  return (
    <div className="flex mt-5 gap-4 items-center">
      {/* previous button */}
      <button
        onClick={() => setQuestionNumber((prev) => prev - 1)}
        disabled={questionNumber <= 1}
        className={cn(
          "bg-blue-600 text-white h-12 flex-1 flex justify-center items-center",
          questionNumber <= 1 && "bg-gray-200 text-gray-400",
        )}
      >
        <ChevronL className="size-5" />
        {t("previous")}
      </button>
      {/* Timer */}
      <CountdownCircleTimer
        isPlaying
        duration={duration * 60}
        colors={"#2563eb"}
        size={64}
        strokeWidth={6}
        strokeLinecap="square"
        onComplete={handleFinish}
      >
        {({ remainingTime }) => formatTime(remainingTime)}
      </CountdownCircleTimer>
      {/* Finish And Next Button */}
      {questionNumber == payload?.questions?.length ? (
        // finish button
        <button onClick={handleFinish} className="bg-blue-700 text-white h-12 flex-1 flex justify-center items-center">
          {t("finish")}
          <ChevronR className="size-5" />
        </button>
      ) : (
        // next button
        <button
          onClick={() => setQuestionNumber((prev) => prev + 1)}
          className="bg-blue-600 text-white h-12 flex-1 flex justify-center items-center"
        >
          {t("next")}
          <ChevronR className="size-5" />
        </button>
      )}
    </div>
  );
}
