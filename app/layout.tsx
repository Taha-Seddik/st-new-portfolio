import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";
import { ColorModeProvider } from "@/components/ColorModeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { CssBaseline } from "@mui/material";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seddik taha",
  description: "Full-stack developer portfolio",
};

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ params, children }: RootLayoutProps) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("THEME_MODE")?.value;
  const initialTheme = themeCookie === "dark" ? "dark" : "light";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ColorModeProvider initialTheme={initialTheme}>
          <AppRouterCacheProvider>
            <CssBaseline />
            <AppHeader />
            <main className="takeTheRest">{children}</main>
            <AppFooter />
          </AppRouterCacheProvider>
        </ColorModeProvider>
      </body>
    </html>
  );
}
