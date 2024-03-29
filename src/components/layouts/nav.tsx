import {
  NAV_SCHEMA,
  findBasePath,
  type INavItem,
  NavIcon,
  NAV_MAP,
} from "@/lib/nav_schema";
import Svgs from "../Svgs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { useNavContext } from "./header";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function WideNav() {
  return (
    <div className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {NAV_SCHEMA.map((item) => (
            <WideNavItem key={item.display} item={item} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function WideNavItem({ item }: { item: INavItem }) {
  const { isBasePath, isCurrentPath } = useNavContext();

  return (
    <NavigationMenuItem>
      {item.display != "Services" ? (
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "bg-transparent",
            isBasePath(item.path) ? "text-primary" : "",
            item.display == "Contact"
              ? "bg-primary text-primary-foreground"
              : "",
          )}
          href={item.path}
        >
          {item.display}
        </NavigationMenuLink>
      ) : (
        <>
          <NavigationMenuTrigger
            className={cn(
              "bg-transparent",
              isBasePath(item.path) ? "text-primary" : "",
            )}
          >
            {item.display}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <ul className="flex gap-2">
              {item.sub?.map((subItem) => (
                <li key={subItem.display}>
                  <NavigationMenuLink
                    className={cn(
                      "flex flex-col w-48 p-2 pt-10 gap-2 shadow-sm border border-border rounded hover:bg-primary-foreground group transition-all",
                      isCurrentPath(subItem.path) ? "border-primary" : "",
                    )}
                    href={subItem.path}
                  >
                    <NavIcon route={subItem} />
                    <h3 className="text-xl font-medium text-primary">
                      {subItem.display}
                    </h3>
                    <p className="text-foreground italic text-xs">
                      {subItem.display == "Social Enterprises"
                        ? "We’ll help you build your business infrastructure, get funding ready, and win government grants and contracts"
                        : "We work with government agencies to complete their strategic plans, position themselves for funding, and win grants"}
                    </p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </>
      )}
    </NavigationMenuItem>
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
        <SheetContent className={"sm:max-w-md w-screen"}>
          <SheetHeader>
            <a href={NAV_MAP.home}>
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
  const { isBasePath } = useNavContext();

  return (
    <div>
      <li
        className={cn(
          "transition-all border border-border text-muted-foreground hover:text-foreground  rounded cursor-pointer hover:bg-secondary group",
          isBasePath(item.path) ? "border-primary" : "",
        )}
      >
        <SheetTrigger asChild>
          <a
            className="flex gap-2 items-center w-full h-full p-4"
            href={item.path !== "/services" ? item.path : "#"}
          >
            <NavIcon route={item} />
            <p>{item.display}</p>
          </a>
        </SheetTrigger>
      </li>
      {item.sub && (
        <ul className="flex flex-col pl-4 mt-2 gap-2">
          {item.sub.map((subItem) => {
            return (
              <li key={subItem.display}>
                <a
                  className="flex px-4 py-2 hover:italic text-foreground bg-secondary rounded "
                  href={subItem.path}
                >
                  {subItem.display}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
