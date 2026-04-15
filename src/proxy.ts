/** src/proxy.ts */
import { defaultLocale, locales } from "@/lib/i18n/routing";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix: "always",
});

export const config = {
    matcher: ["/((?!api|_next|_vercel|logos|flags|images|videos|icons|assets|.*\\..*).*)",],
};
