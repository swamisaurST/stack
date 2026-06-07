/** Resolve a public-folder path for both local dev (/) and GitHub Pages (/repo/). */
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL || "/";
  const normalized = path.replace(/^\//, "");
  return `${base}${normalized}`;
}
