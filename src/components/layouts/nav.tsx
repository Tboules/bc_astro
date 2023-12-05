import Svgs from "../Svgs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
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
          <a href="/">
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
          <Separator className="mt-4 mb-6" />
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}
