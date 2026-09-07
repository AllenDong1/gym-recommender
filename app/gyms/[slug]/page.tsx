import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, Star } from "lucide-react";
import {
  formatContractType,
  getGymBySlug,
  GYMS,
} from "@/lib/gyms";
import REGIONS from "@/data/regions.json";

export function generateStaticParams() {
  return GYMS.map((gym) => ({ slug: gym.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const gym = getGymBySlug(slug);
  if (!gym) return { title: "Gym not found" };
  return {
    title: `${gym.name} — Gym Recommender`,
    description: `${gym.name} in ${gym.suburb}. Compare address, amenities, and membership options.`,
  };
}

export default async function GymDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const gym = getGymBySlug(slug);
  if (!gym) notFound();

  const region = REGIONS.find((item) => item.id === gym.region);

  return (
    <main className="flex-1 py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href={region ? `/?region=${region.id}` : "/"}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {region ? `Back to ${region.name}` : "Back to search"}
        </Link>

        <article className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          <div className="relative h-56 bg-gradient-to-br from-primary/10 to-primary/5">
            {gym.tags.length > 0 ? (
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1 p-4">
                {gym.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-background/95 px-2.5 py-0.5 text-xs font-semibold shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="space-y-8 p-6 sm:p-8">
            <div className="space-y-3">
              <h1 className="text-3xl font-extrabold tracking-tight">{gym.name}</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4 shrink-0" />
                  {gym.suburb}, {gym.state} {gym.postcode}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-foreground">
                    {gym.rating.toFixed(1)}
                  </span>
                  ({gym.reviewCount} reviews)
                </span>
                <span className="font-semibold text-primary">
                  from ${gym.weeklyPrice}/wk
                </span>
              </div>
            </div>

            <section>
              <h2 className="mb-3 text-lg font-semibold">Address</h2>
              <p className="text-sm text-muted-foreground">
                {gym.address}
                <br />
                {gym.suburb} {gym.state} {gym.postcode}
              </p>
              {region ? (
                <Link
                  href={`/?region=${region.id}`}
                  className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                >
                  {region.name}
                </Link>
              ) : null}
            </section>

            {gym.amenities.length > 0 ? (
              <section>
                <h2 className="mb-3 text-lg font-semibold">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {gym.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </section>
            ) : null}

            {gym.contractOptions.length > 0 ? (
              <section>
                <h2 className="mb-3 text-lg font-semibold">Membership</h2>
                <ul className="divide-y divide-border rounded-md border border-border">
                  {gym.contractOptions.map((option) => (
                    <li
                      key={option.type}
                      className="flex items-center justify-between gap-4 px-4 py-3"
                    >
                      <span className="inline-flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        {formatContractType(option.type)}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        ${option.weeklyRate}/wk
                      </span>
                    </li>
                  ))}
                </ul>
                {gym.joiningFee === 0 ? (
                  <p className="mt-3 text-sm text-muted-foreground">
                    No joining fee
                  </p>
                ) : (
                  <p className="mt-3 text-sm text-muted-foreground">
                    Joining fee ${gym.joiningFee}
                  </p>
                )}
              </section>
            ) : null}
          </div>
        </article>
      </div>
    </main>
  );
}
