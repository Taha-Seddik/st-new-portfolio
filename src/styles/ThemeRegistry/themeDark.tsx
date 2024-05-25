import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const rubic = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#04293A",
      paper: "#064663",
    },
    primary: {
      main: "#191919",
    },
  },
  typography: {
    fontFamily: rubic.style.fontFamily,
  },

  components: {},
});

export default theme;
