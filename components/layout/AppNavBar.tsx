"use client";

import { NavigationData } from "@/utils/data";
import { useIsUpMd } from "@/utils/responsive.utils";
import { useScrollTo } from "@/utils/useScrollTo";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  zIndex: 10,
}));

const MainNavigationContainer = styled("div")(() => ({
  display: "flex",
  flex: 1,
  position: "relative",
}));

const NavBtn = styled(Button)(({ theme }) => ({
  border: "none",
  display: "inline-block",
  fontSize: 15,
  fontWeight: 400,
  color: "white",
  textTransform: "none",
  marginRight: theme.spacing(0.5),
}));

export const AppNavBar: React.FC<{}> = () => {
  const isOnMd = useIsUpMd();
  return <Container>{isOnMd ? <MainNavigation /> : null}</Container>;
};

const MainNavigation: React.FC<{}> = ({}) => {
  const { scrollToEl } = useScrollTo();
  const handleNavBtnClick = (navEl: (typeof NavigationData)[0]) => {
    scrollToEl(navEl.scrollTo);
  };

  return (
    <MainNavigationContainer>
      <span className="takeTheRest" />
      <ul>
        {NavigationData.map((x, i) => (
          <NavBtn key={x.text} variant="text" onClick={() => handleNavBtnClick(x)}>
            {x.text}
          </NavBtn>
        ))}
      </ul>
    </MainNavigationContainer>
  );
};
