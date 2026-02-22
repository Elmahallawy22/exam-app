"use client";

import * as React from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const InputField = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full border border-input bg-transparent px-2.5 py-3.5 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "[invalid=true]:ring-distractive aria-[invalid=true]:focus-visible:ring-destructive",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
InputField.displayName = "InputField";

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      {/* input */}
      <InputField type={showPassword ? "text" : "password"} className={cn("pe-10", className)} ref={ref} {...props} />
      {/* toggle button */}
      <button
        type="button"
        className="absolute inset-y-0 end-0 px-3 py-2 text-muted-foreground hover:text-ring"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <EyeIcon className="h-4 w-4" /> : <EyeOffIcon className="h-4 w-4" />}
      </button>
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => {
  if (type === "password") return <PasswordInput className={className} ref={ref} {...props} />;

  return <InputField className={className} ref={ref} type={type} {...props} />;
});
Input.displayName = "Input";

export { Input };
