/** src/components/ui/Section.tsx */
import type { ReactNode } from "react";
import {cn} from "@/lib/utils";

type SectionProps = {
    children: ReactNode;
    className?: string;
}

export default function Section({children, className}: SectionProps) {
    return (
        <section className={cn("section-base", className)}>
            {children}
        </section>
    )
}