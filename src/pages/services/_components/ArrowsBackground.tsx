import useWindowDimensions from "@/lib/hooks/useWindowDimensions";
import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export default function ArrowsBackground() {
  const { displayArray } = useWindowDimensions();

  return (
    <div className="absolute h-[843px] min-w-full top-16 left-0 flex -z-10 overflow-x-clip">
      {displayArray.map((v) => {
        return (
          <SvgArrows
            key={v}
            className={cn("absolute top-0 opacity-55")}
            style={{ left: v }}
          />
        );
      })}
    </div>
  );
}

function SvgArrows(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={268}
      height={843}
      fill="none"
      {...props}
    >
      <path
        fill="url(#a)"
        d="M266.374.894c-.089-.314-.329-.52-.535-.462l-3.365.955c-.206.059-.301.36-.212.674.089.314.328.521.535.462l2.991-.849 1.29 4.547c.089.314.329.52.535.462.207-.059.302-.36.213-.674L266.374.894ZM1.378 842.327l265-841-.756-.654-265 841 .756.654Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={1}
          x2={530.227}
          y1={842}
          y2={229.188}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.049} stopColor="#CFE2C3" />
          <stop offset={0.631} stopColor="#769DA2" />
          <stop offset={1} stopColor="#A39DC5" stopOpacity={0.9} />
        </linearGradient>
      </defs>
    </svg>
  );
}
