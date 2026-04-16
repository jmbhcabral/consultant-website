/** src/app/[locale]/[...slug]/page.tsx — catch-all for unmatched paths */
import { notFound } from "next/navigation";

export default function CatchAllPage() {
    notFound();
}
