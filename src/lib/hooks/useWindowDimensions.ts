import React from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

function getArraySizeBasedOnDimensions(width: number) {
  return Array.from(
    { length: Math.floor(width / 30) },
    (v, i) => `${i * 40 - 250}px`,
  );
}

export default function useWindowDimensions() {
  const [displayArray, setDisplayArray] = React.useState(
    getArraySizeBasedOnDimensions(getWindowDimensions().width),
  );
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions(),
  );

  React.useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    setDisplayArray(getArraySizeBasedOnDimensions(windowDimensions.width));
  }, [windowDimensions]);

  return { windowDimensions, displayArray };
}
