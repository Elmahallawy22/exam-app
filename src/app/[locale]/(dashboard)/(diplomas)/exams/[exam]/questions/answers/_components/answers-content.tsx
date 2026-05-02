import { DonutChart } from "./donut-chart";
import AnswerItem from "./answer-item";
import { useTranslations } from "next-intl";
import { useCheckAnswers } from "@/hooks/use-check";
import { useEffect, useState } from "react";

export default function AnswersContent() {
  // Translation
  const t = useTranslations("dashboard.answers");

  // State
  const [correct, setCorrect] = useState<number>(0);
  const [incorrect, setIncorrect] = useState<number>(0);
  const [wrongQuestions, setWrongQuestions] = useState<WrongQuestion[]>([]);

  // Mutation
  const { mutate } = useCheckAnswers();

  // Variables => This is a flexible choice
  const answersRaw = typeof window !== "undefined" ? JSON.parse(sessionStorage.getItem("answers") || "{}") : {};

  const answers = Object.entries(answersRaw).map(([questionId, answer]) => ({
    questionId,
    correct: answer as string,
  }));

  // Effects
  useEffect(() => {
    if (!answers.length) return;

    mutate(
      { answers, time: 60 },
      {
        onSuccess: (res: CheckResponse) => {
          setCorrect(res.correct);
          setIncorrect(res.wrong);
          setWrongQuestions(res.WrongQuestions);
        },
        onError: (err: Error) => {
          console.error("Error ❌", err);
        },
      },
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="my-4 space-y-4">
      <h5 className="pt-6 text-blue-600 text-2xl font-semibold">{t("results")}:</h5>
      <div className="grid grid-cols-4 gap-9 items-center">
        <div className="col-span-1">
          <DonutChart correctValue={correct ?? ""} incorrectValue={incorrect ?? ""} />
        </div>
        <div className="col-span-3 max-h-110 overflow-y-auto w-full p-1.5">
          {wrongQuestions.length >= 0 &&
            wrongQuestions.map((item) => (
              <div key={item.QID}>
                <AnswerItem
                  questionId={item.QID}
                  question={item.Question}
                  correctAnswer={item.correctAnswer}
                  incorrectAnswer={item.inCorrectAnswer}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
