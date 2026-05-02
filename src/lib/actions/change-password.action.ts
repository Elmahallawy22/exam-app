export async function changePasswordAction(fields: { oldPassword: string; password: string; rePassword: string }) {
  const response = await fetch(`/api/changePassword`, {
    method: "PATCH",
    body: JSON.stringify(fields),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<null> = await response.json();

  return payload;
}
