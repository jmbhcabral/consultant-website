/** src/components/ui/form/Input.tsx */

import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & {
    error?: boolean;
};

export function Input({ className, error, ...props }: InputProps) {
    return (
        <input
            className={cn(
                "w-full rounded-sm border bg-surface px-4 py-3 text-sm text-foreground",
                "placeholder:text-muted-foreground/50",
                "transition focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40",
                "disabled:cursor-not-allowed disabled:opacity-50",
                error
                    ? "border-red-400 focus:ring-red-200 focus:border-red-400"
                    : "border-border",
                className
            )}
            {...props}
        />
    );
}
