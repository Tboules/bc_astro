import { Button } from "../ui/button";
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
        <SheetContent>
          <h1>Hello Drawer</h1>
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
