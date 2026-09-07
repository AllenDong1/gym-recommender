import { describe, expect, it } from "vitest";
import { formatContractType, getGymBySlug, GYMS } from "@/lib/gyms";

describe("getGymBySlug", () => {
  it("finds a gym from the seed data", () => {
    const gym = getGymBySlug("soho-gym-recovery-sydney");
    expect(gym?.name).toBe("SOHO Gym + Recovery");
    expect(gym?.address).toBe("Wentworth Connection");
    expect(gym?.amenities).toContain("Personal Training");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getGymBySlug("not-a-real-gym")).toBeUndefined();
  });

  it("uses a unique slug for every gym", () => {
    const slugs = GYMS.map((gym) => gym.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("formatContractType", () => {
  it("labels known contract types", () => {
    expect(formatContractType("no-contract")).toBe("No contract");
    expect(formatContractType("12-months")).toBe("12-month contract");
  });
});
