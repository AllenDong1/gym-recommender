import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Logo className="h-8 w-8" />
            <span>
              &copy; {new Date().getFullYear()} GymSwitch. All rights
              reserved.
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Details are for reference. Confirm with the gym directly.
          </p>
        </div>
      </div>
    </footer>
  );
}
