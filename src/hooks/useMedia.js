import { useEffect, useMemo, useState } from "react";

export default function useMedia() {
  const getIsMobile = () =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false;

  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);

    setIsMobile(mq.matches);

    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  return useMemo(() => ({ isMobile }), [isMobile]);
}