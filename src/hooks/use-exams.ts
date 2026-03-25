"use client";

import { getExamsService } from "@/lib/services/exams.service";
import { useQuery } from "@tanstack/react-query";

export function useExams() {
  const {
    data: payload,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["exams"],
    queryFn: () => getExamsService(),
  });

  return { payload, error, isLoading };
}
