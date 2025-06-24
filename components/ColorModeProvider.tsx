'use client';

import React, { createContext, useMemo, useState, ReactNode, useContext } from 'react';
import { ThemeProvider, createTheme, PaletteMode } from '@mui/material';
import baseThemeOptions from '@/styles/baseThemeOptions';

// Same cookie-writer helper as before:
function setCookie(name: string, value: string, days: number = 30) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}`;
}

interface ColorModeContextValue {
  mode: PaletteMode;
  toggleMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue>({
  mode: 'light',
  toggleMode: () => {},
});

type Props = {
  children: ReactNode;
  initialTheme: PaletteMode; // either 'light' or 'dark'
};

export const ColorModeProvider: React.FC<Props> = ({ children, initialTheme }) => {
  // Initialize from the server-provided prop
  const [mode, setMode] = useState<PaletteMode>(initialTheme);

  // Create MUI theme based on `mode`
  const theme = useMemo(
    () =>
      createTheme({
        ...baseThemeOptions,
        palette: {
          ...baseThemeOptions.palette,
          mode,
          background: {
            default: mode === 'light' ? '#fafafa' : '#2e2e2e',
          },
        },
      }),
    [mode],
  );

  const toggleMode = () => {
    setMode((prev) => {
      const newMode: PaletteMode = prev === 'light' ? 'dark' : 'light';
      setCookie('THEME_MODE', newMode, 30);
      return newMode;
    });
  };

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
