import Image from "next/image";
import Link from "next/link";
import { Dumbbell, MapPin, Search, Star } from "lucide-react";
import { GymCard } from "@/components/gyms/GymCard";
import { GYMS, type Gym } from "@/lib/gyms";
import { searchGyms } from "@/lib/search";
import REGIONS from "@/data/regions.json";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; region?: string }>;
}) {
  const { q = "", region = "" } = await searchParams;
  const query = q.trim();
  const selectedRegion = REGIONS.find((item) => item.id === region);

  const gyms = selectedRegion
    ? GYMS.filter((gym) => gym.region === selectedRegion.id)
    : query
      ? searchGyms(GYMS, query)
      : [];
  const isFiltered = Boolean(query || selectedRegion);

  const heading = query
    ? `Results for “${query}”`
    : selectedRegion
      ? selectedRegion.name
      : "";

  return (
    <main className="flex-1">
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20">
        <div className="mx-auto max-w-7xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Find the{" "}
            <span className="text-primary">right gym</span> for you
          </h1>
          <form className="mx-auto flex w-full max-w-xl gap-2" action="/">
            <div className="relative w-full flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                name="q"
                defaultValue={q}
                placeholder="Search by suburb, postcode, or address…"
                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {isFiltered ? (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">{heading}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {gyms.length} {gyms.length === 1 ? "gym" : "gyms"}
                {" · "}
                <Link href="/" className="text-primary hover:underline">
                  Clear search
                </Link>
              </p>
            </div>
            {gyms.length === 0 ? (
              <p className="text-muted-foreground">No gyms match that search.</p>
            ) : (
              <GymGrid gyms={gyms} />
            )}
          </div>
        </section>
      ) : null}

      <section className="bg-muted/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Ratings & Reviews</h3>
              <p className="text-sm text-muted-foreground">
                Find highly rated gyms in your area.
              </p>
            </div>
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Location-Based</h3>
              <p className="text-sm text-muted-foreground">
                Find gyms in your suburb or postcode.
              </p>
            </div>
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Franchised gyms</h3>
              <p className="text-sm text-muted-foreground">
                Anytime Fitness, Fitness First, Plus Fitness...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold">Browse by Region</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {REGIONS.map((region) => {
              const gymCount = GYMS.filter((gym) => gym.region === region.id)
                .length;
              if (gymCount === 0) return null;
              return (
                <Link
                  key={region.id}
                  href={`/?region=${region.id}`}
                  className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative h-40 overflow-hidden bg-muted">
                    <Image
                      src={region.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-sm font-semibold">{region.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {gymCount} {gymCount === 1 ? "gym" : "gyms"}
                      </p>
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                      {region.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function GymGrid({ gyms }: { gyms: Gym[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {gyms.map((gym) => (
        <GymCard key={gym.id} gym={gym} />
      ))}
    </div>
  );
}
