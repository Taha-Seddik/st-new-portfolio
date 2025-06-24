/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/st-new-portfolio" : "",
  assetPrefix: isProd ? "/st-new-portfolio" : "",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/st-new-portfolio" : "",
  },
};

export default nextConfig;
