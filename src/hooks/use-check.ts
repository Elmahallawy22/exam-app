import { useMutation } from "@tanstack/react-query";
import { checkAnswersAction } from "@/lib/actions/check.action";

export const useCheckAnswers = () => {
  return useMutation<CheckResponse, Error, { answers: { questionId: string; correct: string }[]; time: number }>({
    mutationFn: ({ answers, time }) => checkAnswersAction(answers, time),
  });
};
