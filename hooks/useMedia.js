import { useEffect, useState } from "react";

export default function useMedia() {
  const get = () => {
    const w = window.innerWidth;
    return {
      width: w,
      isMobile: w < 768,
      isTablet: w >= 768 && w < 1024,
      isDesktop: w >= 1024,
    };
  };

  const [media, setMedia] = useState(get());

  useEffect(() => {
    const onResize = () => setMedia(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return media;
}