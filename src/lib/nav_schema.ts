export type IBaseDisplays =
  | "Home"
  | "Services"
  | "About Us"
  | "Community"
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
    path: "/community",
    display: "Community",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

export function findBasePath(name: IBaseDisplays): string {
  const route = NAV_SCHEMA.find((route) => route.display == name)

  return route!.path
}

export function findSubPath(name: ISubDisplays): string {
  const route = NAV_SCHEMA[1].sub?.find(route => route.display == name)
  return route!.path
}
