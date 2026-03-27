"use client";

import { getQuestionsService } from "@/lib/services/questions.service";
import { useQuery } from "@tanstack/react-query";

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
