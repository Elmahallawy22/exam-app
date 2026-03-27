import { forwardRef } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-merge";

export const ChevronR = forwardRef<SVGSVGElement, React.ComponentProps<typeof ChevronRight>>(({ className, ...props }, ref) => {
  return <ChevronRight className={cn("rtl:rotate-180", className)} {...props} ref={ref} />;
});

ChevronR.displayName = "ChevronR";
