import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token?.accessToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);

  const exam = searchParams.get("exam");

  const res = await fetch(`${process.env.API}/questions?exam=${exam}`, {
    headers: {
      token: token.accessToken,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
