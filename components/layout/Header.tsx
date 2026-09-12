import Link from "next/link";
import { House } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-primary"
        >
          <Logo priority className="h-12 w-12" />
          <span>GymSwitch</span>
        </Link>
        <nav>
          <Link
            href="/"
            aria-label="Home"
            className="inline-flex items-center justify-center p-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <House className="h-9 w-9" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
