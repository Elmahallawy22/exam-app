import React from "react";
import type { LucideIcon } from "lucide-react";

type PageTitleProps = {
  icon: LucideIcon;
  title: string;
};

export default function PageTitle({ icon: Icon, title }: PageTitleProps) {
  return (
    <div className="h-20 bg-blue-600 text-white p-4 text-3xl font-semibold flex items-center gap-4 mb-6">
      <Icon className="size-11" />
      {title}
    </div>
  );
}