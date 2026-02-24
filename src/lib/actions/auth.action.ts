"use server";
import { EmailStepFields, LoginResponse, OtpStepFields, RegisterFields } from "../types/auth";

// register
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

// send otp for email
export async function sendOtpAction(fields: EmailStepFields) {
  const response = await fetch(`${process.env.API}/auth/forgotPassword`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<null> = await response.json();

  return payload;
}

// reset nuw password
export async function resetPasswordAction(fields: { email: string; newPassword: string }) {
  const response = await fetch(`${process.env.API}/auth/resetPassword `, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<null> = await response.json();

  return payload;
}

// verify Otp which sent from email
export async function verifyOtpAction(fields: OtpStepFields) {
  const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify({
      resetCode: fields.otp,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<null> = await response.json();

  return payload;
}
