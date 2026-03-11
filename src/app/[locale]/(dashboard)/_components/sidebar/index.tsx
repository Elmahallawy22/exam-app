import Image from "next/image";
import React from "react";
import SidebarList from "./sidebar-list";
import { useTranslations } from "next-intl";
import UserInfo from "./user-info";

export default function Sidebar() {
  // Translation
  const t = useTranslations("dashboard");

  return (
    <aside className="col-span-3 bg-blue-50 p-10 h-screen flex flex-col justify-between">
      <div>
        {/* sidebar logo */}
        <Image src="/assets/side-logo.png" alt="sidebar logo" width={192} height={37} />
        {/* website logo */}
        <div className="flex gap-4 items-start mt-2.5">
          <Image src="/assets/folder_code.png" alt="folder code icon" width={28} height={24} />
          <h3 className="text-blue-600 text-xl font-semibold">{t("sidebar.title")}</h3>
        </div>
        {/* list of Pages */}
        <SidebarList />
      </div>
      {/* user info */}
      <UserInfo />
    </aside>
  );
}
