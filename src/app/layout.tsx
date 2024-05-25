import "@/styles/globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "@/styles/ThemeRegistry/themeRegistry";
import { AppFooter } from "@/layout/Footer";
import Box from "@mui/material/Box";
import { AppHeader } from "@/layout/AppHeader";

export const metadata: Metadata = {
  title: "Seddik taha",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeRegistry>
          <Box display="flex" flexDirection="column" className="root ">
            <AppHeader />
            <main className="takeTheRest">{children}</main>
            <AppFooter />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
