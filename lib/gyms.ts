import seed from "@/data/gyms.seed.json";

export type Gym = {
  id: string;
  name: string;
  brand: string;
  suburb: string;
  state: string;
  postcode: string;
  region: string;
  rating: number;
  reviewCount: number;
  amenities: string[];
};

export const GYMS: Gym[] = seed.map((gym) => ({
  id: gym.id,
  name: gym.name,
  brand: gym.brand,
  suburb: gym.suburb,
  state: gym.state,
  postcode: gym.postcode,
  region: gym.region,
  rating: gym.rating,
  reviewCount: gym.reviewCount,
  amenities: gym.amenities,
}));
