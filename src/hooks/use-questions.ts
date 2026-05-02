"use client";

import { getQuestionService, getQuestionsService } from "@/lib/services/questions.service";
import { useQuery } from "@tanstack/react-query";

// Get Questions by examId
export function useQuestions(examId: string) {
  const {
    data: payload,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["questions", examId],
    queryFn: () => getQuestionsService(examId),
  });

  return { payload, error, isLoading };
}

// Get Single Question
export const useQuestion = (id: string) => {
  return useQuery<SingleQuestionResponse, Error>({
    queryKey: ["question", id],
    queryFn: () => getQuestionService(id),
    enabled: !!id,
  });
};
