"use client";
import { ThemeProvider } from "next-themes";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      // The bootstrap runs in server HTML; client mounts use the provider effects.
      // next-themes suppresses the intentional hydration difference on its script.
      scriptProps={{
        type:
          typeof window === "undefined"
            ? "text/javascript"
            : "application/x-theme-bootstrap",
      }}
    >
      {children}
    </ThemeProvider>
  );
}
