import { describe, expect, it } from "vitest";
import type { Gym } from "@/lib/gyms";
import { searchGyms } from "@/lib/search";

const gyms: Gym[] = [
  {
    id: "bondi",
    name: "Anytime Fitness Bondi",
    brand: "Anytime Fitness",
    slug: "anytime-fitness-bondi",
    address: "74 Campbell Parade",
    suburb: "Bondi Beach",
    state: "NSW",
    postcode: "2026",
    region: "eastern-suburbs",
    rating: 4.5,
    reviewCount: 312,
    weeklyPrice: 22,
    joiningFee: 0,
    amenities: ["24/7 Access"],
    contractOptions: [{ type: "no-contract", weeklyRate: 22 }],
    tags: [],
  },
  {
    id: "cbd",
    name: "Fitness First Sydney CBD",
    brand: "Fitness First",
    slug: "fitness-first-sydney-cbd",
    address: "170 Castlereagh St",
    suburb: "Sydney",
    state: "NSW",
    postcode: "2000",
    region: "sydney-cbd",
    rating: 4.3,
    reviewCount: 891,
    weeklyPrice: 28,
    joiningFee: 0,
    amenities: ["Personal Training"],
    contractOptions: [{ type: "12-months", weeklyRate: 28 }],
    tags: [],
  },
  {
    id: "newtown",
    name: "F45 Training Newtown",
    brand: "F45",
    slug: "f45-training-newtown",
    address: "12 King St",
    suburb: "Newtown",
    state: "NSW",
    postcode: "2042",
    region: "inner-west",
    rating: 4.7,
    reviewCount: 428,
    weeklyPrice: 24,
    joiningFee: 0,
    amenities: ["Group Classes"],
    contractOptions: [{ type: "no-contract", weeklyRate: 24 }],
    tags: [],
  },
];

describe("searchGyms", () => {
  it("returns all gyms when the query is empty", () => {
    expect(searchGyms(gyms, "")).toEqual(gyms);
    expect(searchGyms(gyms, "   ")).toEqual(gyms);
  });

  it("matches suburb case-insensitively", () => {
    const result = searchGyms(gyms, "bondi");
    expect(result.map((gym) => gym.name)).toEqual(["Anytime Fitness Bondi"]);
  });

  it("matches brand", () => {
    const result = searchGyms(gyms, "F45");
    expect(result.map((gym) => gym.name)).toEqual(["F45 Training Newtown"]);
  });

  it("matches postcode", () => {
    const result = searchGyms(gyms, "2000");
    expect(result.map((gym) => gym.name)).toEqual(["Fitness First Sydney CBD"]);
  });

  it("matches street address", () => {
    const result = searchGyms(gyms, "castlereagh");
    expect(result.map((gym) => gym.name)).toEqual(["Fitness First Sydney CBD"]);
  });

  it("returns an empty list when nothing matches", () => {
    expect(searchGyms(gyms, "melbourne")).toEqual([]);
  });
});
