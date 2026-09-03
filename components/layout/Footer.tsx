import { Dumbbell } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Dumbbell className="h-4 w-4" />
            <span>
              &copy; {new Date().getFullYear()} Gym Recommender. All rights
              reserved.
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Gym details are for discovery only. Confirm amenities and membership
            with each gym directly.
          </p>
        </div>
      </div>
    </footer>
  );
}
