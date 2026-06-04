import { useEffect, useState } from "react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let loadingTimeout: NodeJS.Timeout;

    // Handle link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");

      // Skip if external, has target="_blank", or is same page
      if (!target || target.target || target.href === window.location.href) {
        return;
      }

      // Check if it's an internal link
      const href = target.getAttribute("href");
      if (href && !href.startsWith("http") && !href.startsWith("mailto") && !href.startsWith("tel")) {
        setIsLoading(true);
        loadingTimeout = setTimeout(() => setIsLoading(false), 800);
      }
    };

    // Handle button form submissions
    const handleFormSubmit = (e: SubmitEvent) => {
      const form = (e.target as HTMLFormElement);
      // Only show loader if form submits to internal page
      if (!form.action || form.action.includes(window.location.hostname)) {
        setIsLoading(true);
        loadingTimeout = setTimeout(() => setIsLoading(false), 800);
      }
    };

    document.addEventListener("click", handleLinkClick as EventListener);
    document.addEventListener("submit", handleFormSubmit as EventListener);

    return () => {
      document.removeEventListener("click", handleLinkClick as EventListener);
      document.removeEventListener("submit", handleFormSubmit as EventListener);
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white/85 backdrop-blur-xs flex items-center justify-center pointer-events-auto">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-[var(--plum)]/15"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--plum)] border-r-[var(--plum)]/60 animate-spin"></div>
        </div>
        <p className="text-sm font-display text-[var(--plum-deep)] tracking-wide">Loading...</p>
      </div>
    </div>
  );
}
