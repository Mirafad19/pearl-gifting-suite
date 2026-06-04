import { useEffect, useState } from "react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleEnd = () => {
      setTimeout(() => setIsLoading(false), 300);
    };

    // Listen for navigation events
    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("load", handleEnd);

    // Also catch link clicks for client-side navigation
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.href && !target.target) {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 300);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("load", handleEnd);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-white/80 backdrop-blur-sm flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-[var(--plum)]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--plum)] animate-spin"></div>
        </div>
        <p className="text-sm font-display text-[var(--plum-deep)] tracking-wide">Loading...</p>
      </div>
    </div>
  );
}
