import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { getToken } from "next-auth/jwt";

// Auth pages (should NOT be accessible when logged in)
const authPages = ["/login", "/register", "/forgot-password"];

// Next-Intl middleware handler
const handleI18nRouting = createMiddleware(routing);

// NextAuth middleware
const authMiddleware = withAuth(
  function onSuccess(req) {
    // Apply i18n routing after successful auth
    return handleI18nRouting(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/login",
    },
  },
);

export default async function middleware(req: NextRequest) {
  // Variables
  const token = await getToken({ req });

  const locales = routing.locales.join("|");

  const authPathnameRegex = new RegExp(`^(/(${locales}))?(${authPages.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`, "i");
  const isAuthPage = authPathnameRegex.test(req.nextUrl.pathname);

  // Public pages logic
  if (isAuthPage) {
    // Redirect authenticated users away from auth pages
    if (token) {
      const redirectUrl = new URL("/", req.nextUrl.origin);

      // Preserve search params
      req.nextUrl.searchParams.forEach((value, key) => {
        redirectUrl.searchParams.set(key, value);
      });

      return NextResponse.redirect(redirectUrl);
    }

    return handleI18nRouting(req);
  }

  return (authMiddleware as any)(req);
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
