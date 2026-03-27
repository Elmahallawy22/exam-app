import { forwardRef } from "react";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-merge";

export const ChevronL = forwardRef<SVGSVGElement, React.ComponentProps<typeof ChevronLeft>>(({ className, ...props }, ref) => {
  return <ChevronLeft className={cn("rtl:rotate-180", className)} {...props} ref={ref} />;
});

ChevronL.displayName = "ChevronL";
