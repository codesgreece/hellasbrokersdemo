import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-[11px] font-medium tracking-[0.28em] uppercase",
            light ? "text-gold" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-balance",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-sm md:text-base leading-relaxed",
            light ? "text-white/70" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      ) : null}
      <div
        className={cn(
          "gold-line mt-7",
          align === "center" ? "mx-auto w-24" : "w-20",
        )}
      />
    </div>
  );
}
