"use client";

import { ThemeToggle } from "./ThemeToggle";
import { AppLogo } from "./AppLogo";
import { AppNavBar } from "./AppNavBar";
import { styled } from "@mui/material/styles";
import { AppNavForMobile } from "./AppNavForMobile";

const CustomHeader = styled("header")(({ theme }) => ({
  position: "sticky",
  top: 0,
  boxShadow: theme.shadows[1],
  zIndex: 10,
  padding: theme.spacing(1, 4),
  background: theme.palette.mode === "dark" ? "#000000" : "rgb(34, 40, 49)",
}));

const HeaderContentBlock = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5px",
}));

const HeaderRightSide = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
}));

export const AppHeader: React.FC<{}> = ({}) => {
  return (
    <CustomHeader>
      <HeaderContentBlock>
        <AppNavForMobile />
        <AppLogo />
        <AppNavBar />
        <HeaderRightSide>
          <ThemeToggle />
        </HeaderRightSide>
      </HeaderContentBlock>
    </CustomHeader>
  );
};
