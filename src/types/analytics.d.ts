/** src/types/analytics.d.ts */

declare global {
    interface Window {
        gtag?: (
            command: "event",
            eventName: string,
            params?: Record<string, string | number | boolean | undefined>
        ) => void;
    }
}

export {};