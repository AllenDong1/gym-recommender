import { Dumbbell, MapPin, Search, Star, Trophy } from "lucide-react";

const FEATURED_GYMS = [
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

const REGIONS = [
  { name: "Sydney CBD", gymCount: 3, description: "City centre and inner suburbs" },
  { name: "Eastern Suburbs", gymCount: 2, description: "Bondi and the beachside east" },
  { name: "Inner West", gymCount: 2, description: "Newtown, Alexandria and nearby" },
  { name: "North Shore", gymCount: 1, description: "Chatswood and the lower north shore" },
  { name: "Northern Beaches", gymCount: 2, description: "Manly, Dee Why and the coast" },
  { name: "Greater Western Sydney", gymCount: 1, description: "Parramatta and western Sydney" },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20">
        <div className="mx-auto max-w-7xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Find a gym that{" "}
            <span className="text-primary">actually fits</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Search gyms near you by suburb, then compare amenities and ratings.
          </p>
          <form className="mx-auto flex w-full max-w-xl gap-2" action="/">
            <div className="relative w-full flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                name="q"
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

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Top Rated Gyms</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_GYMS.map((gym) => (
              <article
                key={gym.name}
                className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/5" />
                <div className="space-y-3 p-4">
                  <div>
                    <h3 className="truncate font-semibold">{gym.name}</h3>
                    <p className="text-sm text-muted-foreground">{gym.brand}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">
                      {gym.suburb}, {gym.state} {gym.postcode}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {gym.rating.toFixed(1)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({gym.reviewCount})
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {gym.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Ratings & Reviews</h3>
              <p className="text-sm text-muted-foreground">
                See community ratings and review counts to find highly rated
                gyms in your area.
              </p>
            </div>
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Location-Based</h3>
              <p className="text-sm text-muted-foreground">
                Find gyms near you with suburb search and map views.
              </p>
            </div>
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">All Major Brands</h3>
              <p className="text-sm text-muted-foreground">
                Anytime Fitness, Fitness First, F45, and more — plus
                independents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold">Browse by Region</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {REGIONS.map((region) => (
              <article
                key={region.name}
                className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"
              >
                <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold">{region.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {region.gymCount} {region.gymCount === 1 ? "gym" : "gyms"}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                    {region.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
