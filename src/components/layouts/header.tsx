import * as React from "react";
import { MobileNav, WideNav } from "./nav";

type Props = {
  curPath: string;
} & React.PropsWithChildren;

const NavContext = React.createContext<{ curPath?: string }>({ curPath: "" });

export function useNavContext() {
  const ctx = React.useContext(NavContext);

  if (!ctx) {
    throw new Error("Trying to use Nav Context out of scope");
  }

  return ctx;
}

export default function MainHeader({ children, curPath }: Props) {
  return (
    <>
      <div className="w-full bg-background/60 backdrop-blur h-16 border-b-border border-b sticky z-50 top-0 left-0">
        <div className="max-w-screen-xl h-full m-auto flex justify-between items-center px-2">
          {children}
          <NavContext.Provider value={{ curPath }}>
            <WideNav />
            <MobileNav />
          </NavContext.Provider>
        </div>
      </div>
    </>
  );
}
