import type { LoginResponse } from "./lib/types/auth";

declare module "next-auth" {
  interface User {
    accessToken: string;
    user: LoginResponse["user"];
  }

  interface Session {
    user: LoginResponse["user"] & { accessToken: string };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    user: LoginResponse["user"];
  }
}
