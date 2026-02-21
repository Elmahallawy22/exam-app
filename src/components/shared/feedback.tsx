import { cn } from "@/lib/utils/tailwind-merge";
import { CircleX } from "lucide-react";

type FeedbackProps = React.HtmlHTMLAttributes<HTMLParagraphElement>;

export default function Feedback({ className, children, ...props }: FeedbackProps) {
  if (!children) return null;

  return (
    <p
      className={cn("text-sm text-destructive py-2.5 border border-destructive text-center bg-red-50 w-full relative", className)}
      {...props}
    >
      {/* Icon */}
      <CircleX className="size-[1.125rem] bg-white rounded-full absolute right-1/2 -top-2.5 translate-x-1/2" />
      {/* content */}
      {children}
    </p>
  );
}
