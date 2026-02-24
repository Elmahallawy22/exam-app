"use client";

import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils/tailwind-merge";
import { useLocale } from "next-intl";

export default function ToggleLanguage({ className }: { className: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggleLocale() {
    const newLocale = locale === "ar" ? "en" : "ar";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);

    // احتفظ بالـ query params الموجودة
    const searchParams = new URLSearchParams(window.location.search);

    // لو فيه callbackUrl غير الـ locale فيه كمان
    if (searchParams.has("callbackUrl")) {
      const callbackUrl = searchParams.get("callbackUrl")!;
      const newCallbackUrl = callbackUrl.replace(`/${locale}`, `/${newLocale}`);
      searchParams.set("callbackUrl", newCallbackUrl);
    }

    const query = searchParams.toString();
    router.push(query ? `${newPath}?${query}` : newPath);
    router.refresh();
  }

  return (
    <button onClick={toggleLocale} className={cn(className)}>
      {locale === "ar" ? "English" : "العربية"}
    </button>
  );
}
