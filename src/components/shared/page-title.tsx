import React from "react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Chevron } from "../icons/Chevron";

type PageTitleProps = {
  icon: LucideIcon;
  title: string;
  isBack?: boolean;
  back?: string;
};

export default function PageTitle({ icon: Icon, title, isBack, back }: PageTitleProps) {
  return (
    <section className="flex gap-2.5 h-20 mb-6">
      {isBack && (
        <Link href={back ?? "/"} className="border border-blue-600 w-9 bg-white flex justify-center items-center">
          <Chevron className="text-blue-600" />
        </Link>
      )}
      <div className=" bg-blue-600 text-white p-4 text-3xl font-semibold flex items-center gap-4 flex-1 h-full">
        <Icon className="size-11" />
        {title}
      </div>
    </section>
  );
}
