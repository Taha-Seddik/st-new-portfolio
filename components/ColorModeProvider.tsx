// app/providers/ColorModeProvider.tsx
"use client";

import React, { createContext, useContext, useMemo, useState, ReactNode, useEffect } from "react";
import { ThemeProvider, createTheme, PaletteMode } from "@mui/material";
import baseThemeOptions from "@/styles/baseThemeOptions";

interface ColorModeContextValue {
  mode: PaletteMode;
  toggleMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue>({
  mode: "light",
  toggleMode: () => {},
});

function getCookie(name: string): string | null {
  // safely read document.cookie—this will only ever run in the browser
  const match = document.cookie.split("; ").find((c) => c.startsWith(name + "="));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

function setCookie(name: string, value: string, days = 30) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}`;
}

export const ColorModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1) default to 'light' for SSR safety
  const [mode, setMode] = useState<PaletteMode>("light");

  // 2) in a useEffect (client-only), read the cookie and override
  useEffect(() => {
    const cookie = getCookie("THEME_MODE");
    if (cookie === "dark" || cookie === "light") {
      setMode(cookie);
    }
  }, []);

  // 3) write back to the cookie whenever mode changes
  useEffect(() => {
    setCookie("THEME_MODE", mode, 30);
  }, [mode]);

  // 4) build your MUI theme
  const theme = useMemo(
    () =>
      createTheme({
        ...baseThemeOptions,
        palette: {
          ...baseThemeOptions.palette,
          mode,
          background: {
            default: mode === "light" ? "#fafafa" : "#2e2e2e",
          },
        },
      }),
    [mode]
  );

  const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
