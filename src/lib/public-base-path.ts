/**
 * Resolves the base path for public assets when deployed to GitHub Pages
 * as a project site (e.g. username.github.io/repo-name/).
 */
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const isUserPagesSite =
  repository !== "" && repository === repositoryOwner + ".github.io";

export const publicBasePath =
  process.env.GITHUB_ACTIONS === "true" && repository && !isUserPagesSite
    ? "/" + repository
    : "";
