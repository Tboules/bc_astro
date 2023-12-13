import * as React from "react";
import { MobileNav, WideNav } from "./nav";

type Props = {
  curPath: string;
} & React.PropsWithChildren;

const NavContext = React.createContext<{
  curPath: string;
  isBasePath: (curPath: string) => boolean;
  isCurrentPath: (curPath: string) => boolean;
} | null>(null);

export function useNavContext() {
  const ctx = React.useContext(NavContext);

  if (!ctx) {
    throw new Error("Trying to use Nav Context out of scope");
  }

  return ctx;
}

export function NavContextProvider({ children, curPath }: Props) {
  function isBasePath(target: string): boolean {
    const slugs = curPath.split("/").slice(1);
    const targetSlug = target.split("/")[1];

    return slugs.includes(targetSlug);
  }

  function isCurrentPath(target: string): boolean {
    const slugs = curPath.split('/').slice(1);
    const targArr = target.split('/')

    return slugs.includes(targArr[targArr.length - 1])
  }

  return (
    <NavContext.Provider value={{ curPath, isBasePath, isCurrentPath }}>
      {children}
    </NavContext.Provider>
  );
}

export default function MainHeader({ children, curPath }: Props) {
  return (
    <>
      <div className="w-full bg-background/60 backdrop-blur h-16 border-b-border border-b sticky z-50 top-0 left-0">
        <div className="max-w-screen-xl h-full m-auto flex justify-between items-center px-2">
          {children}
          <NavContextProvider curPath={curPath}>
            <WideNav />
            <MobileNav />
          </NavContextProvider>
        </div>
      </div>
    </>
  );
}
