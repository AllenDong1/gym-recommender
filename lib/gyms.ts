export type Gym = {
  name: string;
  brand: string;
  suburb: string;
  state: string;
  postcode: string;
  rating: number;
  reviewCount: number;
  amenities: string[];
};

export const GYMS: Gym[] = [
  {
    name: "Anytime Fitness Bondi",
    brand: "Anytime Fitness",
    suburb: "Bondi Beach",
    state: "NSW",
    postcode: "2026",
    rating: 4.5,
    reviewCount: 312,
    amenities: ["24/7 Access", "Personal Training", "Parking"],
  },
  {
    name: "Fitness First Sydney CBD",
    brand: "Fitness First",
    suburb: "Sydney",
    state: "NSW",
    postcode: "2000",
    rating: 4.3,
    reviewCount: 891,
    amenities: ["Pool", "Sauna", "Group Classes"],
  },
  {
    name: "F45 Training Newtown",
    brand: "F45",
    suburb: "Newtown",
    state: "NSW",
    postcode: "2042",
    rating: 4.7,
    reviewCount: 428,
    amenities: ["Group Classes", "Personal Training"],
  },
  {
    name: "Virgin Active Pitt Street",
    brand: "Virgin Active",
    suburb: "Sydney",
    state: "NSW",
    postcode: "2000",
    rating: 4.6,
    reviewCount: 654,
    amenities: ["Pool", "Sauna", "Cafe"],
  },
];
