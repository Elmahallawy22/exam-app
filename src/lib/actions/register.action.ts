"use server"
import { LoginResponse, RegisterFields } from "../types/auth";

export async function registerAction(fields: RegisterFields) {
  const response = await fetch(`${process.env.API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<LoginResponse> = await response.json();

  return payload;
}
