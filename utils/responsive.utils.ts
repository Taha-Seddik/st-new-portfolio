"use client";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const useIsSm = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("md"));
};

export const useIsUpMd = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("md"));
};

export const useIsMd = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("lg"));
};

export const useIsUpLg = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("xl"));
};
