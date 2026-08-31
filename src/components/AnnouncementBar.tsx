import { Megaphone, Phone, X } from "lucide-react";
import { useState } from "react";

import { useSite } from "@/context/SiteProvider";

export function AnnouncementBar() {
  const { settings } = useSite();
  const [dismissed, setDismissed] = useState(false);

  if (!settings.announcementEnabled || dismissed || !settings.announcementText) {
    return null;
  }

  return (
    <div className="relative overflow-hidden bg-[image:var(--gradient-solar)] text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 text-xs font-semibold sm:text-sm">
        <Megaphone className="hidden h-4 w-4 shrink-0 sm:block" />
        <p className="flex-1 truncate">{settings.announcementText}</p>
        <a
          href={`tel:${settings.phonePrimary.replace(/\s/g, "")}`}
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-background/20 px-3 py-1 backdrop-blur transition hover:bg-background/30 md:inline-flex"
        >
          <Phone className="h-3.5 w-3.5" />
          {settings.phonePrimary}
        </a>
        <button
          type="button"
          aria-label="Dismiss announcement"
          onClick={() => setDismissed(true)}
          className="shrink-0 rounded-full p-1 transition hover:bg-background/20"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
