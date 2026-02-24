import { forwardRef } from "react";
import { MoveRight as LucideMoveRight } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-merge";

export const MoveRight = forwardRef<SVGSVGElement, React.ComponentProps<typeof LucideMoveRight>>(({ className, ...props }, ref) => {
  return <LucideMoveRight className={cn("rtl:rotate-180", className)} {...props} ref={ref} />;
});

MoveRight.displayName = "MoveRight";
