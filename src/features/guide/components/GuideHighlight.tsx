/** src/features/guide/components/GuideHighlight.tsx */

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GuideHighlightProps = {
    children: ReactNode;
    variant?: "info" | "warning";
};

export function GuideHighlight({ children, variant = "info" }: GuideHighlightProps) {
    return (
        <div
            className={cn(
                "rounded-sm border-l-2 p-4 text-sm leading-relaxed",
                variant === "info"
                    ? "border-accent-warm bg-surface-soft/60 text-foreground/80"
                    : "border-red-300 bg-red-50/60 text-foreground/80"
            )}
        >
            {children}
        </div>
    );
}
