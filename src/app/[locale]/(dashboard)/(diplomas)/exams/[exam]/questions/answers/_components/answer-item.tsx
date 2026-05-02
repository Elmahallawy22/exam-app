import { useTranslations } from "next-intl";
import { useQuestion } from "@/hooks/use-questions";
import { Circle, CircleDot } from "lucide-react";

type AnswerItemProps = {
  questionId: string;
  question: string;
  correctAnswer: string;
  incorrectAnswer: string;
};

export default function AnswerItem({ questionId, question, correctAnswer, incorrectAnswer }: AnswerItemProps) {
  // Translation
  const t = useTranslations("dashboard.answers");

  // Queries
  const { data, isPending, isError } = useQuestion(questionId);

  // Guards
  if (isPending) return <p>{t("loading")}...</p>;
  if (isError) return <p>{t("error")} ❌</p>;

  return (
    <div className="p-2.5 space-y-2">
      <h6 className="text-xl font-semibold text-blue-600">{question}</h6>
      <div className="p-4 bg-red-50 flex items-center gap-2.5 text-sm">
        <CircleDot size={16} strokeWidth={4} className="text-red-500" />
        {/* show wrong answer */}
        {incorrectAnswer == "A0" ? (
          t("no-answer")
        ) : (
          <>
            {data?.question.answers
              .filter((item) => item.key === incorrectAnswer)
              .map((item) => (
                <span key={item.key}>{item.answer}</span>
              ))}
          </>
        )}
      </div>
      <p className="p-4 bg-emerald-50 flex items-center gap-2.5 text-sm">
        <Circle size={16} strokeWidth={4} className="text-emerald-500" />
        {/* show correct answer */}
        {data?.question.answers
          .filter((item) => item.key === correctAnswer)
          .map((item) => (
            <span key={item.key}>{item.answer}</span>
          ))}
      </p>
    </div>
  );
}
