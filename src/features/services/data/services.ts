/** src/features/services/data/services.ts */

export type Service = {
    number: string;
    slug: string;
    title: string;
    tagline: string;
    description: string;
    steps: string[];
};

export type ProcessStep = {
    number: string;
    title: string;
    description: string;
};

/** Structural data only — text comes from translations */
export const servicesMeta = [
  {
    number: "01",
    slug: "preparacao-estrategica",
  },
  {
    number: "02",
    slug: "promocao-multicanal",
  },
  {
    number: "03",
    slug: "gestao-comercial",
  },
  {
    number: "04",
    slug: "negociacao-e-fecho",
  },
  {
    number: "05",
    slug: "gestao-e-reporting",
  },
] as const;

export const processNumbers = ["01", "02", "03", "04"] as const;
