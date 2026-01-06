import { ReactNode } from "react";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface PreviewCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  children?: ReactNode;
  className?: string;        // allow custom outer class
  iconWrapper?: string;      // allow custom icon background
}

export default function PreviewCard({
  title,
  description,
  icon,
  children,
  className,
  iconWrapper,
}: PreviewCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border bg-background p-6 shadow-sm ring-1 ring-primary/10 opacity-90 select-none",
        className
      )}
    >
      {/* Preview badge */}
      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border bg-background/80 px-2 py-1 text-xs text-muted-foreground backdrop-blur">
        <Lock className="h-3 w-3" />
        Preview
      </div>

      {/* Header */}
      <div className="mb-3 flex items-center gap-3">
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50", iconWrapper)}>
          {icon}
        </div>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>

      {/* Content */}
      {children && <div className="space-y-3">{children}</div>}
    </div>
  );
}
