import { useEffect } from "react";

export default function useVisibleHook({ setIsVisible, isVisible, ref }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setIsVisible(false);
          console.log("abc");
        }
        console.log("entry", isVisible);
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
  }, []);
}
