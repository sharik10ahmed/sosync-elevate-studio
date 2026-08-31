import { Link } from "@tanstack/react-router";

import logo from "@/assets/sosync-logo.png.asset.json";
import { COMPANY } from "@/lib/company";
import { cn } from "@/lib/utils";

export function LogoLockup({
  className,
  showText = true,
  size = "md",
}: {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const dims = size === "sm" ? "h-9 w-9" : size === "lg" ? "h-14 w-14" : "h-11 w-11";

  return (
    <Link to="/" className={cn("group flex items-center gap-3", className)}>
      <img
        src={logo.url}
        alt="SOSync AI Tech logo"
        className={cn(dims, "shrink-0 object-contain transition-transform duration-300 group-hover:scale-105")}
      />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            SO<span className="text-primary">Sync</span> AI Tech
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {COMPANY.tagline}
          </span>
        </span>
      )}
    </Link>
  );
}
