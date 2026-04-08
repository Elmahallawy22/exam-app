"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils/tailwind-merge";
import { CircleUserRound, Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LogoutButton from "./logout-button";

export default function AccountSidebar() {
  // Translation
  const t = useTranslations("dashboard.account-sidebar");

  // Navigationw
  const pathname = usePathname();

  // State
  const [active, setActive] = useState<number>(1);

  // Variables
  const sidebarList = [
    { id: 1, icon: <CircleUserRound />, name: t("profile"), href: "/account/profile" },
    { id: 2, icon: <Lock />, name: t("change-password"), href: "/account/change-password" },
  ];

  // Constants
  const segments = pathname.split("/").filter(Boolean);

  // Effects
  useEffect(() => {
    if (segments[1] === "profile") setActive(1);
    else setActive(2);
  }, [segments]);

  return (
    <aside className="col-span-3 bg-white p-6 flex flex-col justify-between ">
      {/* Sidebar Items */}
      <ul className="space-y-2.5">
        {sidebarList.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href ?? ""}
              className={cn("py-2.5 px-4 text-gray-500 flex gap-2.5", active === item.id && "text-blue-600 bg-blue-50")}
              onClick={() => setActive(item.id)}
            >
              {item.icon} {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Logout Button */}
      <LogoutButton />
    </aside>
  );
}
