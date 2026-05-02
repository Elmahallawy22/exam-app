import { useQuestions } from "@/hooks/use-questions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type QuestionsContentProps = {
  id: string;
  questionNumber: number;
  answers: Record<string, string>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
};

export default function QuestionsContent({ id, questionNumber, answers, setAnswers }: QuestionsContentProps) {
  // Query
  const { payload } = useQuestions(id ?? "");

  // Guards
  if (!payload) return null;

  // Variables
  const question = payload.questions[questionNumber - 1];

  // Functions
  const handleAnswer = (questionId: string, answerKey: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerKey,
    }));
  };

  return (
    <div className="p-6 bg-white">
      <h3 className="text-blue-600 text-2xl font-semibold">{question.question}</h3>
      <RadioGroup value={answers[question._id] ?? ""} onValueChange={(val) => handleAnswer(question._id, val)} className="mt-4 space-y-2.5">
        {question.answers.map((ans) => (
          <div key={ans.key}>
            <Label htmlFor={`${question._id}-${ans.key}`} className="text-gray-800 flex items-center gap-3 p-4 bg-gray-50">
              <RadioGroupItem value={ans.key} id={`${question._id}-${ans.key}`} />
              {ans.answer}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
