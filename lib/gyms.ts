import seed from "@/data/gyms.seed.json";

export const GYM_TAGS = ["24/7", "Free trial", "Promotion"] as const;
export type GymTag = (typeof GYM_TAGS)[number];

const FREE_TRIAL_BRANDS = new Set([
  "Anytime Fitness",
  "Jetts",
  "Snap Fitness",
  "Plus Fitness",
  "Fitness First",
]);

export type ContractOption = {
  type: string;
  weeklyRate: number;
};

export type Gym = {
  id: string;
  name: string;
  brand: string;
  slug: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  region: string;
  rating: number;
  reviewCount: number;
  weeklyPrice: number;
  joiningFee: number;
  amenities: string[];
  contractOptions: ContractOption[];
  tags: GymTag[];
};

function tagsFromSeed(gym: (typeof seed)[number]): GymTag[] {
  const tags: GymTag[] = [];

  if (gym.amenities.includes("24/7 Access") || gym.name.includes("24/7")) {
    tags.push("24/7");
  }
  if (FREE_TRIAL_BRANDS.has(gym.brand)) {
    tags.push("Free trial");
  }
  if (gym.promotions.active || gym.pricing.weeklyBase <= 16) {
    tags.push("Promotion");
  }

  return tags;
}

export const GYMS: Gym[] = seed.map((gym) => ({
  id: gym.id,
  name: gym.name,
  brand: gym.brand,
  slug: gym.slug,
  address: gym.address,
  suburb: gym.suburb,
  state: gym.state,
  postcode: gym.postcode,
  region: gym.region,
  rating: gym.rating,
  reviewCount: gym.reviewCount,
  weeklyPrice: gym.pricing.weeklyBase,
  joiningFee: gym.pricing.joiningFee,
  amenities: gym.amenities,
  contractOptions: gym.contractOptions,
  tags: tagsFromSeed(gym),
}));

export function getGymBySlug(slug: string): Gym | undefined {
  return GYMS.find((gym) => gym.slug === slug);
}

export function formatContractType(type: string): string {
  if (type === "no-contract") return "No contract";
  if (type === "12-months") return "12-month contract";
  return type.replace(/-/g, " ");
}
