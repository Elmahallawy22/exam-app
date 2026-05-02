export async function editProfileAction(fields: { firstName: string; lastName: string; username: string; email: string; phone: string }) {
  const response = await fetch(`/api/editProfile`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<null> = await response.json();

  return payload;
}
