export async function deleteMeAction() {
  const response = await fetch(`/api/deleteMe`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<null> = await response.json();

  return payload;
}