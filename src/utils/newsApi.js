import { BASE_URL } from "../endpoint";
import { slugify, truncateLabel } from "./slugify";

export function resolveApiImage(image) {
  if (!image) return "";
  if (typeof image === "string" && (image.startsWith("data:") || image.startsWith("http"))) {
    return image;
  }
  if (typeof image === "string" && image.startsWith("/")) {
    const origin = BASE_URL.replace(/\/api\/?$/, "");
    return `${origin}${image}`;
  }
  return image;
}

function isHtmlContent(content) {
  return /<[a-z][\s\S]*>/i.test(content ?? "");
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

export function normalizeNewsList(data) {
  const list = Array.isArray(data) ? data : data?.data ?? data?.news ?? [];
  return list
    .map((item) => ({
      id: item.id ?? item._id,
      slug:
        item.slug ||
        slugify(item.title || "") ||
        String(item.id ?? item._id ?? ""),
      title: item.title ?? "",
      meta: item.meta ?? "",
      image: resolveApiImage(item.image ?? item.image_url ?? item.cover_image),
      excerpt: item.description ?? item.excerpt ?? "",
    }))
    .filter((item) => item.title);
}

export function attachNewsNeighbors(article, list) {
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

export function normalizeNewsDetail(data) {
  const news = data?.data ?? data?.news ?? data;

  return {
    id: news.id ?? news._id,
    slug:
      news.slug ||
      slugify(news.title || "") ||
      String(news.id ?? news._id ?? ""),
    title: news.title ?? "",
    description: news.description ?? news.excerpt ?? "",
    meta: news.meta ?? "",
    image: resolveApiImage(news.image ?? news.image_url ?? news.cover_image),
    content: news.content ?? "",
    isHtml: isHtmlContent(news.content),
    paragraphs: isHtmlContent(news.content)
      ? []
      : contentToParagraphs(news.content),
    prevLink: null,
    nextLink: null,
    hasCtaBand: false,
  };
}
