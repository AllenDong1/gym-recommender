import Image from "next/image";
import { Dumbbell } from "lucide-react";
import type { Gym } from "@/lib/gyms";
import { getBrandVisual } from "@/lib/brands";

export function GymHero({
  gym,
  className,
}: {
  gym: Gym;
  className: string;
}) {
  const visual = getBrandVisual(gym.brand);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={visual ? { backgroundColor: visual.background } : undefined}
    >
      {visual ? (
        <Image
          src={visual.src}
          alt=""
          fill
          unoptimized={visual.src.endsWith(".svg")}
          className="object-contain p-8"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-blue-800">
          <Dumbbell
            className="h-16 w-16 text-white"
            strokeWidth={1.75}
            aria-hidden
          />
        </div>
      )}
      {gym.tags.length > 0 ? (
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-wrap gap-1 p-3">
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
  );
}
