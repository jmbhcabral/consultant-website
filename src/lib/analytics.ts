/** src/lib/analitics.ts */

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params?: AnalyticsParams) {
    if (typeof window === "undefined") return;
    if (typeof window.gtag !== "function") return;

    window.gtag("event", eventName, params);
}