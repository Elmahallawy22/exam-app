import { Progress } from "@/components/ui/progress";
import { useQuestions } from "@/hooks/use-questions";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

type QuestionsProgressProps = {
  questionNumber: number;
  id: string;
};

export default function QuestionsProgress({ questionNumber, id }: QuestionsProgressProps) {
  // Translation
  const t = useTranslations("dashboard.questions");

  // Navigation
  const pathname = usePathname();

  // Queries
  const { payload } = useQuestions(id ?? "");

  // Variables => This is a flexible choice
  const segments = pathname.split("/");
  const title = segments[3] ? decodeURIComponent(segments[3]) : "";

  const total = payload?.questions?.length ?? 1;
  const progressValue = (questionNumber / total) * 100;

  return (
    <>
      <div className="flex justify-between mb-1 text-gray-500">
        <p>
          {t("type")} - {title}
        </p>
        <p>
          {t("question")} <span className="text-blue-600 font-bold">{questionNumber}</span> {t("of")} {payload?.questions?.length}
        </p>
      </div>
      {/* Progress of Questions */}
      <Progress value={progressValue} className="bg-blue-50 h-4 rounded-none" />
    </>
  );
}
