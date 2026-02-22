import React from "react";
import Image from "next/image";
import { BookOpenCheck, Brain, RectangleEllipsis } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-merge";
import { useTranslations } from "next-intl";

export default function AuthSide() {
  // translations
  const t = useTranslations("auth-side");

  const list = [
    {
      title: t("title-feature-one"),
      description: t("sub-title-feature-one"),
      icon: <Brain />,
    },
    {
      title: t("title-feature-two"),
      description: t("sub-title-feature-two"),
      icon: <BookOpenCheck />,
    },
    {
      title: t("title-feature-three"),
      description: t("sub-title-feature-three"),
      icon: <RectangleEllipsis />,
    },
  ];

  return (
    <aside
      className={cn(
        "col-span-1 flex justify-center items-center bg-blue-100 relative overflow-hidden",
        "before:absolute before:size-96 before:bg-blue-300 before:rounded-full before:top-10 before:-right-10 before:blur-3xl",
        "after:absolute after:size-96 after:bg-blue-300 after:rounded-full after:bottom-10 after:-left-10 after:blur-3xl",
      )}
    >
      <div className="space-y-20 z-10">
        <div className="flex gap-4 items-start">
          <Image src="/assets/folder_code.png" alt="folder code icon" width={28} height={24} />
          <h3 className="text-blue-600 text-xl font-semibold">{t('title')}</h3>
        </div>
        <div className="max-w-110 w-full">
          <p className="text-3xl font-bold font-inter rtl:font-lemonada mb-9">{t('sub-title')}</p>
          <ul className="space-y-9">
            {list.map((item, index) => (
              <li className="flex gap-4" key={index}>
                <div className="size-9 shrink-0 border-2 border-blue-600 flex justify-center items-center text-blue-600 mt-2">
                  {item.icon}
                </div>
                <div className="">
                  <h6 className="text-xl font-semibold text-blue-600">{item.title}</h6>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
