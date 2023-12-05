import { NAV_SCHEMA, findBasePath, type INavItem } from "@/lib/nav_schema";
import Svgs from "../Svgs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Home, Menu } from "lucide-react";

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
          <Button variant="outline" size="icon">
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
            <ul className="flex flex-col gap-4">
              {NAV_SCHEMA.map((item) => (
                <MobileNavBaseCard key={item.display} item={item} />
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function MobileNavBaseCard({ item }: { item: INavItem }) {
  return (
    <div>
      <li className="border border-border rounded cursor-pointer hover:bg-secondary group">
        <a className="flex gap-2 items-center w-full h-full p-4" href={item.path}>
          <Home className='text-primary bg-secondary group-hover:text-white group-hover:bg-primary rounded w-8 h-8 p-1'/>
          <p>{item.display}</p>
        </a>
      </li>
      {item.sub && (
        <ul className='flex flex-col pl-4 mt-2 gap-2'>
          {item.sub.map((subItem) => {
            return (
              <li key={subItem.display}>
                <a href={subItem.path}>{subItem.display}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
