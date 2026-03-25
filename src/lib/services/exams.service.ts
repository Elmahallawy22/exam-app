import { ExamsResponse } from "../types/exam";

export async function getExamsService(): Promise<ExamsResponse> {
  const res = await fetch(`/api/exams`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to Get Exams");

  return res.json();
}
