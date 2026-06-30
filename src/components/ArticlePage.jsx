import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Icon } from "./icons";
import LinkedInBanner from "./LinkedInBanner";
import { usePageTitle } from "../hooks/usePageTitle";
import { resolveImageSrc } from "../utils/imageUpload";
import { cleanRichContentHtml } from "../utils/richContent";

export default function ArticlePage({
  articles,
  article: providedArticle,
  basePath,
  backLabel,
  backTo,
  showPlaceholder = true,
}) {
  const { slug } = useParams();
  const article = providedArticle ?? articles?.find((a) => a.slug === slug);

  usePageTitle(
    article ? `${article.title} | Nationwide Transport Services` : "Article",
    article?.description
  );

  if (!article) return <Navigate to={backTo} replace />;

  const prevTo = article.prevLink
    ? `${basePath}/${article.prevLink.id ?? article.prevLink.slug}`
    : null;
  const nextTo = article.nextLink
    ? `${basePath}/${article.nextLink.id ?? article.nextLink.slug}`
    : null;

  return (
    <>
      <article className="article">
        <div className="article__wrap">
          <Link className="article__back" to={backTo}>
            <Icon name="back" /> Back to {backLabel}
          </Link>
          <p className="article__meta" style={{ marginTop: 18 }}>{article.meta}</p>
          <h1>{article.title}</h1>
          <img
            className="article__hero"
            src={article.image?.startsWith("http") ? article.image : resolveImageSrc(article.image)}
            alt={article.title}
          />
          <div className="article__body">
            {article.isHtml ? (
              <div
                className="article__rich-content"
                dangerouslySetInnerHTML={{ __html: cleanRichContentHtml(article.content) }}
              />
            ) : (
              <>
                {article.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {showPlaceholder && (
                  <p style={{ color: "var(--muted)", fontSize: ".92rem", marginTop: 28 }}>
                    <em>This article content is placeholder text and can be replaced with your final copy.</em>
                  </p>
                )}
              </>
            )}
          </div>
          <div style={{ marginTop: 34, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {prevTo && (
              <Link className="btn btn--outline" to={prevTo}>
                Previous: {article.prevLink.label}
              </Link>
            )}
            {nextTo && (
              <Link className="btn btn--outline" to={nextTo}>
                Next: {article.nextLink.label}
              </Link>
            )}
          </div>
        </div>
      </article>

      {article.hasCtaBand && (
        <section className="section--tight ctaband">
          <div className="wrap reveal">
            <h2>Ready to ship?</h2>
            <Link className="btn btn--navy" to="/contact">
              Request a Quote{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      <LinkedInBanner />
    </>
  );
}
