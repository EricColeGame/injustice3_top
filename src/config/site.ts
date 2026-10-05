export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Injustice 3 Wiki",
  shortName: "Injustice 3",
  logoText: "I",
  tagline: "Characters, Release Date, Story & Gameplay News",
  description: "A fan-focused Injustice 3 wiki covering release news, characters, story theories, gameplay updates, trailers, and the latest development rumors.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://injustice3.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://injustice3.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://warnerbrosgames.com/",
  heroVideoId: "8WS47Ms97HM", // Injustice 3 showcase trailer
  social: {
    youtube: "https://www.youtube.com/@NetherRealmStudios",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
