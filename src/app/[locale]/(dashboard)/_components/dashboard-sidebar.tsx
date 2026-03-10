import Image from "next/image";
import React from "react";
import SidebarList from "./sidebar-list";
import { EllipsisVertical } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DashboardSidebar() {
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
      <div className="flex gap-2.5 items-center">
        <div className="w-14 h-14 border bg-blue-500"></div>
        <div className="">
          <h6 className="text-blue-600 font-medium">Firstname</h6>
          <p className="text-gray-500 text-sm">user-email@example.com</p>
        </div>
        <button>
          <EllipsisVertical width={18} height={18} className="text-gray-500" />
        </button>
      </div>
    </aside>
  );
}
