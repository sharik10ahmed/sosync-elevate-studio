import { Link } from "@tanstack/react-router";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LogoLockup } from "@/components/LogoLockup";
import { Button } from "@/components/ui/button";
import { useSite } from "@/context/SiteProvider";

const NAV_LINKS = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const { settings, openModal } = useSite();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-background/40 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <LogoLockup />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${settings.phonePrimary.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary md:inline-flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            {settings.phonePrimary}
          </a>
          <Button
            onClick={() => openModal("demo")}
            className="hidden bg-[image:var(--gradient-solar)] font-semibold text-primary-foreground shadow-[var(--shadow-solar)] hover:opacity-90 sm:inline-flex"
          >
            <CalendarCheck className="mr-2 h-4 w-4" />
            Book ₹1 Demo
          </Button>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-4 pb-5 pt-3 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Button
              onClick={() => {
                setOpen(false);
                openModal("demo");
              }}
              className="w-full bg-[image:var(--gradient-solar)] font-semibold text-primary-foreground"
            >
              <CalendarCheck className="mr-2 h-4 w-4" />
              Book ₹1 Demo Consultation
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a href={`tel:${settings.phonePrimary.replace(/\s/g, "")}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call {settings.phonePrimary}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
