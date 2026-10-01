import Link from "next/link";
import type { MouseEventHandler } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-gold text-navy-dark hover:bg-gold-light shadow-[0_10px_30px_rgba(214,169,54,0.18)]",
  secondary:
    "border border-white/40 text-white hover:border-gold hover:text-gold bg-transparent",
  ghost:
    "border border-navy/15 text-navy hover:border-gold hover:text-gold bg-transparent",
  gold: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-navy-dark",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] md:text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
