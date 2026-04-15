/** src/features/public/navigation/publicNavigation.ts */

type NavigationItem = {
    key: string;
    href: string;
};

export type PublicNavigation = Array<NavigationItem>;

export const publicNavigation: PublicNavigation = [
    { key: "home", href: "/" },
    { key: "about", href: "/sobre" },
    { key: "services", href: "/servicos" },
    { key: "guide", href: "/guia" },
    { key: "contact", href: "/contacto" },
];
