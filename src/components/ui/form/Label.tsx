/** src/components/ui/form/Label.tsx */

import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type LabelProps = ComponentPropsWithoutRef<"label"> & {
    required?: boolean;
};

export function Label({ className, children, required, ...props }: LabelProps) {
    return (
        <label
            className={cn(
                "block text-[0.7rem] font-medium tracking-[0.14em] uppercase text-foreground/70",
                className
            )}
            {...props}
        >
            {children}
            {required && (
                <span aria-hidden="true" className="ml-1 text-accent-warm">
                    *
                </span>
            )}
        </label>
    );
}
