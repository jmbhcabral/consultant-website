/** src/components/ui/form/FieldError.tsx */

import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type FieldErrorProps = ComponentPropsWithoutRef<"span"> & {
    message?: string;
};

export function FieldError({ message, className, ...props }: FieldErrorProps) {
    if (!message) return null;
    return (
        <span
            role="alert"
            className={cn("text-xs text-red-500", className)}
            {...props}
        >
            {message}
        </span>
    );
}
