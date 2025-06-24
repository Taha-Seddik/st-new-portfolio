"use client";

import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../ColorModeProvider";

export function ThemeToggle() {
  const { mode, toggleMode } = useColorMode();

  return (
    <IconButton sx={{ ml: 1, color: "white" }} onClick={toggleMode} color="inherit">
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
