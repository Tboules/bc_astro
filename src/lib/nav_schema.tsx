import { useNavContext } from "@/components/layouts/header";
import {
  BookOpenText,
  HelpingHand,
  Home,
  Landmark,
  PhoneOutgoing,
  Ribbon,
  Sprout,
} from "lucide-react";
import { cn } from "./utils";

export type IBaseDisplays =
  | "Home"
  | "Services"
  | "About Us"
  | "Resources"
  | "Contact";
export type ISubDisplays = "Social Enterprises" | "Government Agencies";

export type ISubNavItem = {
  path: string;
  display: ISubDisplays;
};

export type INavItem = {
  path: string;
  display: IBaseDisplays;
  sub?: ISubNavItem[];
};

export const NAV_MAP = {
  home: "/",
  services: "/services",
  aboutUs: "/about-us",
  resources: "/resources",
  contact: "/contact",
  socialEnterprises: "/services/social-enterprises",
  governmentAgencies: "/services/government-agencies",
};

export const NAV_SCHEMA: INavItem[] = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
    sub: [
      {
        path: "/services/social-enterprises",
        display: "Social Enterprises",
      },
      {
        path: "/services/government-agencies",
        display: "Government Agencies",
      },
    ],
  },
  {
    path: "/about-us",
    display: "About Us",
  },
  {
    path: "/resources",
    display: "Resources",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

export function findBasePath(name: IBaseDisplays): string {
  const route = NAV_SCHEMA.find((route) => route.display == name);

  return route!.path;
}

export function findSubPath(name: ISubDisplays): string {
  const route = NAV_SCHEMA[1].sub?.find((route) => route.display == name);
  return route!.path;
}

export function NavIcon({ route }: { route: INavItem | ISubNavItem }) {
  const { curPath } = useNavContext();

  const styles = cn(
    "transition-all text-primary bg-secondary group-hover:text-white group-hover:bg-primary rounded w-8 h-8 p-1",
    curPath == route.path ? "bg-primary text-white" : "",
  );

  switch (route.display) {
    case "Home":
      return <Home className={styles} />;
    case "Services":
      return <HelpingHand className={styles} />;
    case "About Us":
      return <Sprout className={styles} />;
    case "Resources":
      return <BookOpenText className={styles} />;
    case "Contact":
      return <PhoneOutgoing className={styles} />;
    case "Social Enterprises":
      return <Ribbon className={styles} />;
    case "Government Agencies":
      return <Landmark className={styles} />;
    default:
      return <Home className={styles} />;
  }
}
