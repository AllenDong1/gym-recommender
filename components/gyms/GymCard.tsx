import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import type { Gym } from "@/lib/gyms";

export function GymCard({ gym }: { gym: Gym }) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/gyms/${gym.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <div className="relative h-40 bg-gradient-to-br from-primary/10 to-primary/5">
          {gym.tags.length > 0 ? (
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1 p-3">
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
        <div className="space-y-3 p-4">
          <h3 className="truncate font-semibold">{gym.name}</h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">
              {gym.suburb}, {gym.state} {gym.postcode}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{gym.rating.toFixed(1)}</span>
              <span className="text-xs text-muted-foreground">
                ({gym.reviewCount})
              </span>
            </div>
            <p className="text-sm font-semibold text-primary">
              from ${gym.weeklyPrice}/wk
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
