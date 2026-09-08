import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import type { Gym } from "@/lib/gyms";
import { GymHero } from "./GymHero";

export function GymCard({ gym }: { gym: Gym }) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/gyms/${gym.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <GymHero gym={gym} className="h-40" />
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
