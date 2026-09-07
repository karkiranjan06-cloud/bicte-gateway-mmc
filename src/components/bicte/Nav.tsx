import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#fee-structure", label: "Fee Structure" },
  { href: "#faculty", label: "Faculty" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary font-display text-lg font-bold text-primary-foreground">
            M
          </span>
          <span className="text-sm font-semibold leading-tight text-navy sm:text-base">
            Makwanpur Multiple Campus{" "}
            <span className="text-muted-foreground">| BICTE</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#apply">Apply Now</a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="px-4 pt-4 text-base">BICTE Program</SheetTitle>
              <nav className="mt-4 flex flex-col gap-1 px-2">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {l.label}
                  </a>
                ))}
                <Button asChild className="mt-3" onClick={() => setOpen(false)}>
                  <a href="#apply">Apply Now</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
