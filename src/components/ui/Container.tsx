/** src/components/ui/Container.tsx */

import type { ReactNode } from "react";
import {cn} from "@/lib/utils"

type ContainerProps = {
    children: ReactNode;
    className?: string;

}
export default function Container({children, className}: ContainerProps) {
    return (
        <div className={
            cn("container-base", className)
        }>
            {children}
        </div>
    );
}