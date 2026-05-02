"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useRouter } from "@/i18n/navigation";
import { EllipsisVertical, LogOut, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

export default function UserInfo() {
  // Translation
  const t = useTranslations("dashboard");
  const locale = useLocale();

  // Navigation
  const router = useRouter();
  // Context
  const { data } = useSession();
  // Hooks
  const user = useMemo(() => ({ user: data?.user }), [data?.user]);
  // Variables
  const firstLetter = user?.user?.firstName?.charAt(0)?.toUpperCase() || "U";

  // function
  const handleSignOut = () => {
    signOut({ callbackUrl: `/${locale}/login` });
  };

  return (
    <div className="flex gap-2.5 items-center">
      <div className="min-w-14 min-h-14 border bg-blue-500 text-white flex justify-center items-center text-3xl">{firstLetter}</div>
      <div className="flex-1 truncate">
        <h6 className="text-blue-600 font-medium">{user?.user?.firstName ?? ""}</h6>
        <p className="text-gray-500 text-sm truncate">{user?.user?.email ?? ""} </p>
      </div>
      <DropdownMenu dir={locale === "ar" ? "rtl" : "ltr"}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open user menu">
            <EllipsisVertical width={18} height={18} className="text-gray-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60" align="end">
          <DropdownMenuGroup className="p-2">
            <DropdownMenuItem
              onClick={() => router.push("/account/profile")}
              className="hover:cursor-pointer border-b border-zinc-100 text-zinc-700 hover:text-zinc-900"
            >
              <User className="h-5 w-5 text-gray-400" /> {t("sidebar.account")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSignOut} className="text-red-600  hover:cursor-pointer">
              <LogOut className="h-5 w-5 text-red-600" /> {t("sidebar.logout")}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
