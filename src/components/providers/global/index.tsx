import { Toaster } from "@/components/ui/sonner";
import NextAuthProvider from "./components/next-auth-provider";
import ReactQueryProvider from "./components/react-query-provider";
import { NextIntlClientProvider } from "next-intl";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <NextIntlClientProvider>
        <NextAuthProvider>
          <Toaster />
          {children}
        </NextAuthProvider>
      </NextIntlClientProvider>
    </ReactQueryProvider>
  );
}
