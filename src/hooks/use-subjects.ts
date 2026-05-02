"use client";

import { getSubjectsService } from "@/lib/services/subjects.service";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useSubjects() {
  const {
    data: payload,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["subjects"],
    queryFn: ({ pageParam }) => getSubjectsService(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.metadata) return undefined;
      if (lastPage.metadata.currentPage === lastPage.metadata.numberOfPages) return undefined;

      return lastPage.metadata.currentPage + 1;
    },
  });

  return { payload, isLoading, error, isFetchingNextPage, hasNextPage, fetchNextPage };
}
