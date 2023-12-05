import Svgs from "../Svgs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

type IBasePaths = "home" | "services" | "aboutUs" | "community" | "contact";
type ISubPaths = "socialEnterprises" | "governmentAgencies";

export type INavShema = {
  [key in IBasePaths]: {
    path: string;
    display: string;
    sub?: {
      [key in ISubPaths]: {
        path: string;
        display: string;
      };
    };
  };
};

export const NAV_SCHEMA: INavShema = {
  home: {
    path: "/",
    display: "Home",
  },
  services: {
    path: "/services",
    display: "Services",
    sub: {
      socialEnterprises: {
        path: "/services/social-enterprises",
        display: "Social Enterprises",
      },
      governmentAgencies: {
        path: "/services/government-agencies",
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

export function WideNav() {
  return (
    <div className="hidden md:flex">
      <h1>Wide Menu</h1>
    </div>
  );
}

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            onClick={() => console.log("clicking")}
            variant="outline"
            size="icon"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className={"sm:max-w-lg w-screen"}>
          <SheetHeader>
            <a href={NAV_SCHEMA.home.path}>
              <div className="flex items-center gap-2">
                <Svgs
                  svgProps={{
                    width: 40,
                    height: 40,
                    viewBox: "0 0 71 70",
                  }}
                  type="logo-color"
                />
                <h1 className="font-medium text-xl text-primary">
                  Boules Consulting
                </h1>
              </div>
            </a>
          </SheetHeader>
          <Separator className="mt-4 mb-6" />
          <nav>
            <ul>
              {Object.values(NAV_SCHEMA).map((item) => {
                return (
                  <li>
                    <h1>{item.display}</h1>
                  </li>
                );
              })}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
