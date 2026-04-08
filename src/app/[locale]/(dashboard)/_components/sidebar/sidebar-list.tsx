"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils/tailwind-merge";
import { GraduationCap, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function SidebarList() {
  // Translation
  const t = useTranslations("dashboard");

  // Navigationw
  const pathname = usePathname();

  // State
  const [active, setActive] = useState<number>(1);

  // Variables
  const sidebarList = [
    { id: 1, icon: <GraduationCap width={24} height={24} />, name: t("sidebar.item1"), href: "/" },
    { id: 2, icon: <UserRound width={24} height={24} />, name: t("sidebar.item2"), href: "/account" },
  ];

  // Constants
  const segments = pathname.split("/").filter(Boolean);

  // Effects
  useEffect(() => {
    if (segments[0] === "account") setActive(2);
    else setActive(1);
  }, [segments]);

  return (
    <ul className="mt-16">
      {sidebarList.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href ?? ""}
            className={cn(
              "flex items-center gap-2.5 p-4 text-gray-500 w-full",
              active === item.id && "text-blue-500 bg-blue-100 border border-blue-500",
            )}
            onClick={() => setActive(item.id)}
          >
            {item.icon} {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
