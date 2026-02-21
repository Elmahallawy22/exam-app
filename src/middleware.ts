import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const autoPages = new Set(["/login", "/register", "forgot-password"]);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req });

  if (!autoPages.has(pathname)) {

    if (token) return NextResponse.next();

    const redirectUrl = new URL("/login", req.nextUrl.origin);
    redirectUrl.searchParams.set("callbackUrl", pathname);

    return NextResponse.redirect(redirectUrl);
  }

  if (!token) return NextResponse.next();

  return NextResponse.redirect(new URL("/", req.nextUrl.origin));
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};