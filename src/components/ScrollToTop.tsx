import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:brightness-110 transition-all cursor-pointer"
      aria-label="Tagasi üles"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
