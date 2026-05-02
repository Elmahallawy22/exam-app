import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/tailwind-merge";
import { LogOut } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  // Translation
  const t = useTranslations("account.account-sidebar");
  const locale = useLocale();

  // function
  const handleSignOut = () => {
    signOut({ callbackUrl: `/${locale}/login` });
  };

  return (
    <Button onClick={handleSignOut} className={cn("py-2.5 px-4 bg-red-50 hover:bg-red-100 text-red-600 flex gap-2.5 rounded-none")}>
      <LogOut className="rotate-180 rtl:rotate-0" /> {t("logout")}
    </Button>
  );
}
