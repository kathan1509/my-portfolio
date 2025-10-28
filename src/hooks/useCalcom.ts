import { useEffect, useState } from "react";

export const useCalcom = (namespace: string = "30min") => {
  const [isCalcomLoaded, setIsCalcomLoaded] = useState(false);

  useEffect(() => {
    let originalConsoleWarn: typeof console.warn;

    const loadCalcom = async () => {
      try {
        // Temporarily suppress Cal.com warnings
        originalConsoleWarn = console.warn;
        console.warn = (...args) => {
          const message = args.join(" ");
          // Filter out known Cal.com warnings
          if (
            message.includes("markdownToSafeHTML") ||
            message.includes("createWithEqualityFn") ||
            message.includes("react-i18next") ||
            message.includes("QuickAvailabilityCheck") ||
            message.includes("DEPRECATED")
          ) {
            return;
          }
          originalConsoleWarn.apply(console, args);
        };

        // Dynamic import to reduce bundle size and avoid early loading
        const { getCalApi } = await import("@calcom/embed-react");
        const cal = await getCalApi({ namespace });

        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme: "auto",
        });

        setIsCalcomLoaded(true);
      } catch (error) {
        console.error("Cal.com initialization error:", error);
      } finally {
        // Restore original console.warn after a delay
        setTimeout(() => {
          if (originalConsoleWarn) {
            console.warn = originalConsoleWarn;
          }
        }, 3000);
      }
    };

    loadCalcom();
  }, [namespace]);

  return {
    isCalcomLoaded,
    // Props for Cal.com button
    getCalProps: (
      calLink: string,
      config = { layout: "month_view", theme: "auto" }
    ) => ({
      "data-cal-namespace": namespace,
      "data-cal-link": calLink,
      "data-cal-config": JSON.stringify(config),
    }),
  };
};
