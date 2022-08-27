import { useCallback, useEffect, useState, useMemo } from "react";

const detectBrowser = () => {
  const { userAgent } = navigator;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    return "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    return "firefox";
  } else if (userAgent.match(/safari/i)) {
    return "safari";
  } else if (userAgent.match(/opr\//i)) {
    return "opera";
  } else if (userAgent.match(/edg/i)) {
    return "edge";
  } else {
    return "unknown";
  }
};

const detectMedia = (sizes) => {
  if (sizes.width < 768) {
    return "sm";
  } else if (sizes.width >= 768 && sizes.width <= 1024) {
    return "md";
  } else {
    return "lg";
  }
};

export const useDevice = () => {
  const browser = useMemo(() => detectBrowser(), []);
  const [media, setMedia] = useState(null);
  const [sizes, setSizes] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    setMedia(detectMedia(sizes));
  }, [sizes]);

  window.onresize = useCallback(() => {
    setSizes({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return {
    ...sizes,
    browser,
    isMobile: media === "sm",
    isTablet: media === "md",
    isDesktop: media === "lg",
  };
};