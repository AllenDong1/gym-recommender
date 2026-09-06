import type { Gym } from "./gyms";

export function searchGyms(gyms: Gym[], query: string): Gym[] {
  const q = query.trim().toLowerCase();
  if (!q) return gyms;

  return gyms.filter(
    (gym) =>
      gym.name.toLowerCase().includes(q) ||
      gym.brand.toLowerCase().includes(q) ||
      gym.address.toLowerCase().includes(q) ||
      gym.suburb.toLowerCase().includes(q) ||
      gym.postcode.includes(q)
  );
}
