export const checkAnswersAction= async (answers: { questionId: string; correct: string }[], time: number): Promise<CheckResponse> => {
  const res = await fetch("/api/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers, time }),
  });

  if (!res.ok) throw new Error("Error");
  return res.json();
};
