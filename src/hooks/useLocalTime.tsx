import { useState, useEffect } from "react";

interface LocalTimeData {
  time: string;
  timezone: string;
  timezoneName: string;
}

// Map timezone identifiers to proper abbreviations
const getTimezoneAbbreviation = (timeZone: string): string => {
  const now = new Date();

  // Try to get the timezone abbreviation using multiple methods
  try {
    // Method 1: Try to get from toLocaleTimeString with specific timezone
    const timeString = now.toLocaleTimeString("en-US", {
      timeZone,
      timeZoneName: "short",
    });

    const parts = timeString.split(" ");
    const abbreviation = parts[parts.length - 1];

    // If we get a proper abbreviation (not just GMT+X), return it
    if (
      abbreviation &&
      abbreviation.length <= 5 &&
      !abbreviation.includes("GMT")
    ) {
      return abbreviation;
    }

    // Method 2: Use Intl.DateTimeFormat for better timezone detection
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "short",
    });

    const parts2 = formatter.formatToParts(now);
    const timeZonePart = parts2.find((part) => part.type === "timeZoneName");

    if (
      timeZonePart &&
      timeZonePart.value &&
      !timeZonePart.value.includes("GMT")
    ) {
      return timeZonePart.value;
    }

    // Method 3: Manual mapping for common timezones
    const timezoneMap: Record<string, string> = {
      // India
      "Asia/Kolkata": "IST",
      "Asia/Calcutta": "IST",

      // North America - Eastern
      "America/Toronto": "EST",
      "America/New_York": "EST",
      "America/Montreal": "EST",

      // North America - Pacific
      "America/Los_Angeles": "PST",
      "America/Vancouver": "PST",

      // North America - Central
      "America/Chicago": "CST",
      "America/Winnipeg": "CST",

      // North America - Mountain
      "America/Denver": "MST",
      "America/Calgary": "MST",

      // Europe
      "Europe/London": "GMT",
      "Europe/Paris": "CET",
      "Europe/Berlin": "CET",
      "Europe/Rome": "CET",
      "Europe/Madrid": "CET",

      // Asia
      "Asia/Tokyo": "JST",
      "Asia/Shanghai": "CST",
      "Asia/Seoul": "KST",
      "Asia/Singapore": "SGT",
      "Asia/Hong_Kong": "HKT",

      // Australia
      "Australia/Sydney": "AEST",
      "Australia/Melbourne": "AEST",
      "Australia/Perth": "AWST",

      // New Zealand
      "Pacific/Auckland": "NZST",

      // Middle East
      "Asia/Dubai": "GST",
      "Asia/Riyadh": "AST",

      // Africa
      "Africa/Cairo": "EET",
      "Africa/Johannesburg": "SAST",
    };

    if (timezoneMap[timeZone]) {
      return timezoneMap[timeZone];
    }

    // Fallback: return the abbreviation we got, even if it's GMT+X
    return abbreviation || "Local";
  } catch (error) {
    console.warn("Error getting timezone abbreviation:", error);
    return "Local";
  }
};

export function useLocalTime(): LocalTimeData {
  const [localTime, setLocalTime] = useState<LocalTimeData>(() => {
    const now = new Date();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timezone = getTimezoneAbbreviation(timeZone);

    return {
      time: now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      timezone: timezone,
      timezoneName: timeZone,
    };
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const timezone = getTimezoneAbbreviation(timeZone);

      setLocalTime({
        time: now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        timezone: timezone,
        timezoneName: timeZone,
      });
    };

    // Update immediately
    updateTime();

    // Update every minute
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return localTime;
}
