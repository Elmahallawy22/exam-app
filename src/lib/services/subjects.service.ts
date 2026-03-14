import { SubjectsResponse } from "../types/subject";

export async function getSubjectsService(page: number): Promise<SubjectsResponse> {
  const res = await fetch(`/api/subjects?page=${page}&limit=6`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to Get Orders Statistics");

  return res.json();
}
