"use client";

import { Box } from "@mui/material";
import CircularProgress, { CircularProgressProps, circularProgressClasses } from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

type IProps = {
  msg?: string;
  withBg?: boolean;
};

export const AppSpinner: React.FC<IProps> = () => {
  const [isMediaQueryReady, setIsMediaQueryReady] = useState(false);
  useEffect(() => {
    // Use a timeout to ensure that the media query is evaluated
    const timeoutId = setTimeout(() => {
      setIsMediaQueryReady(true);
    }, 0);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures useEffect runs once on mount

  if (!isMediaQueryReady) {
    return (
      <Box className="appSpinnerWrapper" sx={{}}>
        <SpinnerComponent />
      </Box>
    );
  }
};

export const SpinnerComponent: React.FC<IProps> = (props) => {
  return (
    <Box className={props.withBg ? "absoluteCentredContentWithBackdrop" : "CentredContent"}>
      <Box className="flexColumnCenterCenter">
        <FacebookCircularProgress />
      </Box>
    </Box>
  );
};

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props: CircularProgressProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"),
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}
