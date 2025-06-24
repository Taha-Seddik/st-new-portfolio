"use client";

import { Menu } from "@mui/icons-material";
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { styled } from "@mui/material/styles";
import { NavigationData } from "@/utils/data";
import { useScrollTo } from "@/utils/useScrollTo";
import { useIsUpMd } from "@/utils/responsive.utils";

type NavDataType = (typeof NavigationData)[0];
const sideNavWidth = 300;

const CustomDrawer = styled(Drawer)(() => ({
  width: sideNavWidth,
  border: "0px !important",
  flexShrink: 0,
  "&  .MuiDrawer-paper": {
    border: "0px !important",
    width: sideNavWidth,
    boxSizing: "border-box",
  },
}));

export const AppNavForMobile: React.FC<{}> = () => {
  const isOnMd = useIsUpMd();
  const [openNav, setOpenNav] = React.useState(false);
  const { scrollToEl } = useScrollTo();

  const toggleDrawer = () => {
    setOpenNav(!openNav);
  };

  const handleDrawerClose = () => {
    setOpenNav(false);
  };

  const handleGoToSection = (navEl: NavDataType) => {
    scrollToEl(navEl.scrollTo);
  };

  if (isOnMd) return null;

  return (
    <>
      <IconButton aria-label="open drawer" onClick={toggleDrawer} edge="start" sx={{ color: "white", mr: 2 }}>
        <Menu />
      </IconButton>
      <CustomDrawer open={openNav} anchor="left" onClose={handleDrawerClose}>
        <SideNavHeadSide />
        <Divider />
        {NavigationData.map((x) => (
          <List key={x.text} disablePadding>
            <NavLinkItem item={x} handleGoToSection={handleGoToSection} />
          </List>
        ))}
      </CustomDrawer>
    </>
  );
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  minHeight: "50px !important",
}));

const SideNavHeadSide: React.FC<{}> = () => {
  return (
    <DrawerHeader className="flexCenterRow" sx={{ height: 120 }}>
      <div className="flexColumnCenterCenter">
        <img src="/mix/tahaLogo.png" alt="logo" width={80} height={80} />
      </div>
    </DrawerHeader>
  );
};

const NavLinkItem: React.FC<{
  item: NavDataType;
  handleGoToSection: (navEl: NavDataType) => void;
}> = (props) => {
  const { item, handleGoToSection } = props;
  return (
    <ListItem>
      <ListItemButton disableRipple onClick={() => handleGoToSection(item)}>
        {/* <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon> */}
        <ListItemText primary={item.text} sx={{ fontWeight: 500 }} primaryTypographyProps={{ fontWeight: 500 }} />
      </ListItemButton>
    </ListItem>
  );
};
