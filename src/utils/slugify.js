export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function uniqueSlug(base, existingSlugs) {
  let slug = slugify(base);
  if (!slug) slug = "item";
  if (!existingSlugs.has(slug)) return slug;

  let n = 2;
  while (existingSlugs.has(`${slug}-${n}`)) n++;
  return `${slug}-${n}`;
}

export function truncateLabel(text, max = 40) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}
