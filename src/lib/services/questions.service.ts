// Get Questions by examId
export async function getQuestionsService(examId : string): Promise<QuizResponse> {
  const res = await fetch(`/api/questions?exam=${examId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to Get Questions");

  return res.json();
}

// Get single Question
export const getQuestionService = async (id: string): Promise<SingleQuestionResponse> => {
  const res = await fetch(`/api/question/${id}`);

  if (!res.ok) throw new Error("Error");
  return res.json();
};