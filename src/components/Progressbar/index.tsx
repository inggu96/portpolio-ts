import { useEffect, useState } from "react";

export const Progressbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const scrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercent);
    };
    window.addEventListener("scroll", scrollProgress);

    return () => {
      window.removeEventListener("scroll", scrollProgress);
    };
  }, []);

  return (
    <div className="container">
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="h-1 bg-blue-500" style={{ width: `${scrollPercentage}%` }} />
      </div>
    </div>
  );
};
