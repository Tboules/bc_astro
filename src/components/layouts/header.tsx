import * as React from "react";
import { MobileNav, WideNav } from "./nav";

export default function MainHeader({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="w-full bg-background/60 backdrop-blur h-16 border-b-border border-b sticky z-50 top-0 left-0">
        <div className="max-w-screen-xl h-full m-auto flex justify-between items-center px-2">
          {children}
          <WideNav />
          <MobileNav />
        </div>
      </div>
    </>
  );
}
