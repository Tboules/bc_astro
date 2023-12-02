import * as React from "react";

type INavSchema = {
  [key: string]: {
    path: string;
    display: string;
    sub?: Omit<INavSchema, "sub">;
  };
};

const NAV_SCHEMA: INavSchema = {
  home: {
    path: "/",
    display: "Home",
  },
  services: {
    path: "/services",
    display: "Services",
    sub: {
      socialEnterprises: {
        path: "/social-enterprises",
        display: "Social Enterprises",
      },
      governmentAgencies: {
        path: "/government-agencies",
        display: "Government Agencies",
      },
    },
  },
  aboutUs: {
    path: "/about-us",
    display: "About Us",
  },
  community: {
    path: "/community",
    display: "Community",
  },
  contact: {
    path: "/contact",
    display: "Contact",
  },
};

export default function MainHeader({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="w-full bg-background/60 backdrop-blur h-16 border-b-border border-b sticky z-50 top-0 left-0">
        <div className="max-w-screen-xl h-full m-auto flex justify-between items-center px-2">
          {children}
          <h1 className="md:hidden">menu</h1>
          <h1 className="hidden md:inline">big menu</h1>
        </div>
      </div>
    </>
  );
}
