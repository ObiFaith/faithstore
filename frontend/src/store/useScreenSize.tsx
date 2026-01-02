import { useEffect, useState } from "react";

const useScreenSize = (smallSize: number, largeSize: number) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.matchMedia(`(max-width: ${smallSize}px)`).matches
  );

  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.matchMedia(`(min-width: ${largeSize}px)`).matches
  );

  useEffect(() => {
    const smallMediaQuery = window.matchMedia(`(max-width: ${smallSize}px)`);
    const largeMediaQuery = window.matchMedia(`(min-width: ${largeSize}px)`);

    const handleSmallMediaQuery = (e: MediaQueryListEvent): void =>
      setIsSmallScreen(e.matches);
    const handleLargeMediaQuery = (e: MediaQueryListEvent): void =>
      setIsLargeScreen(e.matches);

    smallMediaQuery.addEventListener("change", handleSmallMediaQuery);
    largeMediaQuery.addEventListener("change", handleLargeMediaQuery);

    return () => {
      smallMediaQuery.removeEventListener("change", handleSmallMediaQuery);
      largeMediaQuery.removeEventListener("change", handleLargeMediaQuery);
    };
  }, [smallSize, largeSize]);

  return { isSmallScreen, isLargeScreen };
};

export default useScreenSize;
