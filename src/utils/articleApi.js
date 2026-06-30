import { slugify, truncateLabel } from "./slugify";
import { resolveApiImage } from "./newsApi";

function parseFeatured(value) {
  return value === true || value === 1 || value === "1" || value === "true";
}

function contentToParagraphs(content) {
  const paragraphs = (content ?? "")
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paragraphs.length === 0 && content?.trim()) {
    return [content.trim()];
  }

  return paragraphs;
}

export function normalizeArticleList(data) {
  const list = Array.isArray(data) ? data : data?.data ?? data?.articles ?? [];
  return list
    .map((article) => {
      const category =
        typeof article.category === "string"
          ? article.category
          : article.category?.name ?? article.category_name ?? "";

      return {
        id: article.id ?? article._id,
        slug:
          article.slug ||
          slugify(article.title || "") ||
          String(article.id ?? article._id ?? ""),
        title: article.title ?? "",
        meta: article.meta ?? "",
        image: resolveApiImage(article.image ?? article.image_url ?? article.cover_image),
        excerpt: article.description ?? article.excerpt ?? "",
        category,
        isFeatured: parseFeatured(article.is_featured),
      };
    })
    .filter((article) => article.title);
}

export function attachArticleNeighbors(article, list) {
  const currentIndex = list.findIndex(
    (item) => String(item.id) === String(article.id)
  );

  if (currentIndex === -1) return article;

  const prev = list[currentIndex - 1];
  const next = list[currentIndex + 1];

  return {
    ...article,
    prevLink: prev ? { id: prev.id, label: truncateLabel(prev.title) } : null,
    nextLink: next ? { id: next.id, label: truncateLabel(next.title) } : null,
  };
}

export function normalizeArticleDetail(data) {
  const article = data?.data ?? data?.article ?? data;
  const category =
    typeof article.category === "string"
      ? article.category
      : article.category?.name ?? article.category_name ?? "";

  return {
    id: article.id ?? article._id,
    slug:
      article.slug ||
      slugify(article.title || "") ||
      String(article.id ?? article._id ?? ""),
    title: article.title ?? "",
    description: article.description ?? article.excerpt ?? "",
    meta: article.meta ?? "",
    image: resolveApiImage(article.image ?? article.image_url ?? article.cover_image),
    category,
    paragraphs: contentToParagraphs(article.content),
    prevLink: null,
    nextLink: null,
    hasCtaBand:
      article.has_cta_band === 1 ||
      article.has_cta_band === true ||
      article.has_cta_band === "1",
  };
}
