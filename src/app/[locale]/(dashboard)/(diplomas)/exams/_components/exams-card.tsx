import { Link } from "@/i18n/navigation";
import { Timer } from "lucide-react";
import { useTranslations } from "next-intl";

type ExamsCardProps = {
  title: string;
  numberOfQuestions: number;
  duration: number;
};

export default function ExamsCard({ title, numberOfQuestions, duration }: ExamsCardProps) {
  // translation
  const t = useTranslations("dashboard.exams");

  return (
    <Link href={`/exams/${title}/questions`} className="p-4 bg-blue-50 flex justify-between items-center">
      <div className="">
        <h6 className="text-xl font-semibold text-blue-600">{title}</h6>
        <p className="text-sm text-gray-500">
          {numberOfQuestions} {t("questions")}
        </p>
      </div>
      <p className="text-gray-800 flex gap-2.5">
        <Timer className="text-gray-400" />
        {t("duration")}: {duration} {t("minutes")}
      </p>
    </Link>
  );
}
