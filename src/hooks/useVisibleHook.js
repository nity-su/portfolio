import { useEffect } from "react";

export default function useVisibleHook({ setIsVisible, ref }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setIsVisible(false);
          console.log("abc");
        }
        if (entry.isIntersecting) {
          console.log("observer");
          setIsVisible(true);
          // observer.disconnect();
        }
      });
    });
    observer.observe(ref.current);
    // observer.unobserve(ref.current);
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line
  }, []);
}
