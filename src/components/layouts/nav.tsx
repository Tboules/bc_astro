import { NAV_SCHEMA, findBasePath } from "@/lib/nav_schema";
import Svgs from "../Svgs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

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
            <a href={findBasePath("Home")}>
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
              {NAV_SCHEMA.map((item) => {
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
