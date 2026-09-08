export type BrandVisual = {
  src: string;
  background: string;
};

const BRAND_VISUALS: Record<string, BrandVisual> = {
  "Anytime Fitness": {
    src: "/images/brands/anytime-fitness.svg",
    background: "#1a0b2e",
  },
  "Fitness First": {
    src: "/images/brands/fitness-first.png",
    background: "#000000",
  },
  "Virgin Active": {
    src: "/images/brands/virgin-active.png",
    background: "#000000",
  },
  "Snap Fitness": {
    src: "/images/brands/snap-fitness.svg",
    background: "#111111",
  },
  F45: {
    src: "/images/brands/f45.svg",
    background: "#000000",
  },
  "Plus Fitness": {
    src: "/images/brands/plus-fitness.jpg",
    background: "#000000",
  },
  Jetts: {
    src: "/images/brands/jetts.svg",
    background: "#e4572e",
  },
};

export function getBrandVisual(brand: string): BrandVisual | undefined {
  return BRAND_VISUALS[brand];
}
