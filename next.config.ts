import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const repo = "/st-new-portfolio"; // ← change this to your GitHub repo slu

const nextConfig: NextConfig = {
  // prefix all pages and assets with /your-repo-name
  basePath: isProd ? `${repo}/` : "",
  // ensure Next’s generated JS/CSS/etc is also loaded from /your-repo-name/
  assetPrefix: isProd ? `${repo}/` : "",
  // optional, for <Image> when using the default loader:
  images: {
    loader: "akamai",
    path: isProd ? `${repo}/` : "",
  },
};

export default nextConfig;
