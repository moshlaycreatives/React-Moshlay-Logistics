import { createContext, useContext, useState, useCallback, useMemo } from "react";
import { newsArticles as defaultNews } from "../data/newsArticles";
import { kbArticles as defaultKb } from "../data/kbArticles";
import { uniqueSlug, truncateLabel } from "../utils/slugify";

const NEWS_KEY = "nts_news_articles";
const KB_KEY = "nts_kb_articles";

function loadStored(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch {
    /* use fallback */
  }
  return fallback;
}

function saveStored(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function normalizeImage(image, fallback) {
  if (!image) return fallback;
  if (typeof image === "string" && image.startsWith("data:")) return image;
  const trimmed = image.trim();
  return trimmed || fallback;
}

function rebuildNavLinks(articles) {
  return articles.map((article, i) => ({
    ...article,
    prevLink:
      i > 0
        ? { slug: articles[i - 1].slug, label: truncateLabel(articles[i - 1].title) }
        : null,
    nextLink:
      i < articles.length - 1
        ? { slug: articles[i + 1].slug, label: truncateLabel(articles[i + 1].title) }
        : null,
  }));
}

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [newsArticles, setNewsArticles] = useState(() =>
    loadStored(NEWS_KEY, defaultNews)
  );
  const [kbArticles, setKbArticles] = useState(() => loadStored(KB_KEY, defaultKb));

  const newsList = useMemo(
    () =>
      newsArticles.map((a) => ({
        slug: a.slug,
        title: a.title,
        meta: a.meta,
        image: a.image,
        excerpt: a.description || a.paragraphs?.[0] || "",
      })),
    [newsArticles]
  );

  const kbList = useMemo(
    () =>
      kbArticles.map((a) => ({
        slug: a.slug,
        title: a.title,
        meta: a.meta,
        image: a.image,
        excerpt: a.description || a.paragraphs?.[0] || "",
        category: a.category || "Guides",
      })),
    [kbArticles]
  );

  const addNews = useCallback((item) => {
    setNewsArticles((prev) => {
      const slugs = new Set(prev.map((a) => a.slug));
      const slug = uniqueSlug(item.title, slugs);
      const paragraphs = item.content
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean);

      const article = {
        slug,
        title: item.title.trim(),
        description: item.description.trim(),
        meta: item.meta.trim(),
        image: normalizeImage(item.image, "news-1.svg"),
        paragraphs,
        hasCtaBand: false,
      };

      const updated = rebuildNavLinks([article, ...prev]);
      saveStored(NEWS_KEY, updated);
      return updated;
    });
  }, []);

  const addArticle = useCallback((item) => {
    setKbArticles((prev) => {
      const slugs = new Set(prev.map((a) => a.slug));
      const slug = uniqueSlug(item.title, slugs);
      const paragraphs = item.content
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean);

      const article = {
        slug,
        title: item.title.trim(),
        description: item.description.trim(),
        meta: item.meta.trim(),
        image: normalizeImage(item.image, "kb-1.svg"),
        category: item.category.trim() || "Guides",
        paragraphs,
        hasCtaBand: item.hasCtaBand ?? true,
      };

      const updated = rebuildNavLinks([article, ...prev]);
      saveStored(KB_KEY, updated);
      return updated;
    });
  }, []);

  return (
    <ContentContext.Provider
      value={{ newsArticles, kbArticles, newsList, kbList, addNews, addArticle }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within ContentProvider");
  return ctx;
}
