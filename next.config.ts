import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const isUserPagesSite =
  repository !== "" && repository === `${repositoryOwner}.github.io`;
const pagesBasePath =
  process.env.GITHUB_ACTIONS === "true" && repository && !isUserPagesSite
    ? `/${repository}`
    : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(pagesBasePath
    ? {
        basePath: pagesBasePath,
        assetPrefix: pagesBasePath,
      }
    : {}),
};

export default nextConfig;
