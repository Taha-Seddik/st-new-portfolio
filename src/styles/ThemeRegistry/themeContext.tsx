"use client";

import React, { createContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import normalTheme from "./themeNormal";
import darkTheme from "./themeDark";

type ThemeName = "normal" | "dark";

interface ICustomThemeContext {
  currentTheme: ThemeName;
  setTheme: (name: ThemeName) => void;
}

export const CustomThemeContext = createContext<ICustomThemeContext>({
  currentTheme: "normal",
  setTheme: null,
});

interface IProps {
  theme: ThemeName;
  children: any;
}

const CustomThemeProvider = (props: IProps) => {
  // State to hold selected theme
  const [themeName, _setThemeName] = useState<ThemeName>(props.theme || "normal");

  const { children } = props;

  const setThemeName = (name: ThemeName) => {
    _setThemeName(name);
  };

  const theme = themeName == "normal" ? normalTheme : darkTheme;

  return (
    <CustomThemeContext.Provider
      value={{
        currentTheme: themeName,
        setTheme: setThemeName,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
