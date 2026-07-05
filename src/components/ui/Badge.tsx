import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "action" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "mono inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" && "bg-[#F4F4F5] text-[#212121]",
        variant === "action" && "bg-primary/10 text-primary",
        variant === "outline" && "border border-[#E4E4E7] text-[#A1A1AA]",
        className
      )}
    >
      {children}
    </span>
  );
}
