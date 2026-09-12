import Image from "next/image";
import Link from "next/link";
import { BadgePercent, Map, Search, SlidersHorizontal, Star } from "lucide-react";
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
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl">
          <Image
            src="/images/hero-gym.png"
            alt=""
            fill
            priority
            quality={95}
            className="object-cover"
            sizes="(min-width: 1280px) 80rem, 100vw"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 space-y-6 px-4 py-20 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl">
              Find The Best{" "}
              <span className="text-blue-300">Gym</span>
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

      <section className="bg-muted/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold">Popular Gyms</h3>
              <p className="text-sm text-muted-foreground">
                Find highly rated gyms near you.
              </p>
            </div>
            <div className="space-y-2 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <BadgePercent className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold">Deals</h3>
              <p className="text-sm text-muted-foreground">
                Compare trials, promotions, and prices.
              </p>
            </div>
            <div className="space-y-2 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <SlidersHorizontal className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold">Preferences</h3>
              <p className="text-sm text-muted-foreground">
                Filter gyms by your preferences.
              </p>
            </div>
            <div className="space-y-2 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Map className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold">Interactive Map</h3>
              <p className="text-sm text-muted-foreground">
                Explore gyms around you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold">Current Promotions</h2>
          <div className="space-y-3">
            <a
              href="https://www.clublime.com.au/join-now/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Club Lime 24/7 gym. 5 weeks free. Sale extended. Join now."
              className="flex h-32 items-center justify-between gap-3 overflow-hidden bg-black px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-6 sm:px-8"
            >
              <div className="flex w-44 shrink-0 items-center -translate-y-1 pl-5">
                <Image
                  src="/images/promotions/club-lime-logo.png"
                  alt=""
                  width={97}
                  height={182}
                  unoptimized
                  className="h-28 w-auto"
                />
              </div>
              <div className="flex h-full min-h-0 min-w-0 flex-1 items-center justify-center">
                <Image
                  src="/images/promotions/club-lime-offer.png"
                  alt=""
                  width={856}
                  height={205}
                  unoptimized
                  className="h-full w-auto object-contain"
                />
              </div>
              <ClaimOfferButton />
            </a>
            <a
              href="https://housed.com.au/intro-offer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-32 items-center justify-between gap-3 bg-[#1a1a1a] px-4 text-[#f5f3ef] transition-colors hover:bg-[#242424] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-6 sm:px-8"
            >
              <div className="flex w-44 shrink-0 items-center">
                <div>
                  <p className="text-base font-bold tracking-[0.28em] sm:text-xl">
                    HOUSED
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.32em] text-[#f5f3ef]/55">
                    Intro offer
                  </p>
                </div>
              </div>
              <p className="min-w-0 flex-1 text-center font-serif text-lg leading-tight sm:text-3xl">
                First 2 weeks for{" "}
                <span className="italic">$1/week</span>
                <span className="align-super text-xs">*</span>
              </p>
              <ClaimOfferButton />
            </a>
            <a
              href="https://www.snapfitness.com/au/national-offer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Snap Fitness. $5 to get started. T&Cs apply."
              className="flex h-32 items-center justify-between gap-3 overflow-hidden bg-black px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-6 sm:px-8"
            >
              <div className="flex w-44 shrink-0 items-center">
                <Image
                  src="/images/promotions/snap-fitness-logo.png"
                  alt=""
                  width={180}
                  height={26}
                  unoptimized
                  className="h-5 w-auto sm:h-6"
                />
              </div>
              <div className="flex h-full min-h-0 min-w-0 flex-1 items-center justify-center">
                <div className="relative h-full">
                  <Image
                    src="/images/promotions/snap-fitness-banner.png"
                    alt=""
                    width={1024}
                    height={236}
                    unoptimized
                    className="h-full w-auto object-contain"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent"
                  />
                </div>
              </div>
              <ClaimOfferButton />
            </a>
            <a
              href="https://www.plusfitness.com.au/free-7-day--trial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Plus Fitness. Free 7 day trial. T&Cs apply. Selected clubs only."
              className="flex h-32 items-center justify-between gap-3 overflow-hidden bg-black px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-6 sm:px-8"
            >
              <div className="flex w-44 shrink-0 items-center">
                <Image
                  src="/images/promotions/plus-fitness-logo.png"
                  alt=""
                  width={240}
                  height={86}
                  unoptimized
                  className="h-8 w-auto sm:h-10"
                />
              </div>
              <div className="flex min-w-0 flex-1 items-center justify-center">
                <div className="flex flex-col items-start gap-1">
                  <Image
                    src="/images/promotions/plus-fitness-free.png"
                    alt=""
                    width={233}
                    height={130}
                    unoptimized
                    className="h-12 w-auto sm:h-14"
                  />
                  <Image
                    src="/images/promotions/plus-fitness-trial.png"
                    alt=""
                    width={457}
                    height={133}
                    unoptimized
                    className="h-12 w-auto sm:h-14"
                  />
                </div>
              </div>
              <ClaimOfferButton />
            </a>
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

function ClaimOfferButton() {
  return (
    <span className="shrink-0 border border-[#f5f3ef] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#f5f3ef] sm:px-4 sm:text-xs">
      Claim offer
    </span>
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
