import { describe, expect, it } from "vitest";
import type { Gym } from "@/lib/gyms";
import { searchGyms } from "@/lib/search";

const gyms: Gym[] = [
  {
    name: "Anytime Fitness Bondi",
    brand: "Anytime Fitness",
    suburb: "Bondi Beach",
    state: "NSW",
    postcode: "2026",
    rating: 4.5,
    reviewCount: 312,
    amenities: [],
  },
  {
    name: "Fitness First Sydney CBD",
    brand: "Fitness First",
    suburb: "Sydney",
    state: "NSW",
    postcode: "2000",
    rating: 4.3,
    reviewCount: 891,
    amenities: [],
  },
  {
    name: "F45 Training Newtown",
    brand: "F45",
    suburb: "Newtown",
    state: "NSW",
    postcode: "2042",
    rating: 4.7,
    reviewCount: 428,
    amenities: [],
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

  it("returns an empty list when nothing matches", () => {
    expect(searchGyms(gyms, "melbourne")).toEqual([]);
  });
});
