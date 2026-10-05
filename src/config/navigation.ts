import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CalendarClock,
  Gamepad2,
  Newspaper,
  ScrollText,
  Swords,
  Users,
} from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "release", path: "/release", icon: CalendarClock, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "roster", path: "/roster", icon: ScrollText, isContentType: true },
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "combat", path: "/combat", icon: Swords, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Gamepad2, isContentType: true },
  { key: "news", path: "/news", icon: Newspaper, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
