"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils/tailwind-merge";

export default function DashboardHeader() {
  // Locale
  const locale = useLocale();
  // Hooks
  const pathname = usePathname();
  // Variables
  let segments = pathname.split("/").filter(Boolean);
  // Constants
  if (segments[0] === locale) segments = segments.slice(1);
  // Function to format any segment into Capitalized Words
  const formatSegment = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="h-12 bg-white p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {segments.map((segment, index) => {
            const href = `/${locale}/` + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;
            return (
              <span key={href} className="flex items-center gap-2">
                {isLast ? (
                  <>
                    <BreadcrumbSeparator className={cn(locale == "ar" && "rotate-180")} />
                    <BreadcrumbItem>
                      {/* decodeURIComponent() to convert %20 to space  */}
                      <BreadcrumbPage>{decodeURIComponent(formatSegment(segment))}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ) : (
                  <>
                    <BreadcrumbSeparator className={cn(locale == "ar" && "rotate-180")} />
                    <BreadcrumbItem>
                      <BreadcrumbLink href={href}> {decodeURIComponent(formatSegment(segment))}</BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )}
              </span>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
