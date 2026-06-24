import { resolveImageSrc } from "../../utils/imageUpload";

export default function AdminContentCard({ item, imageFallback, badge }) {
  const excerpt =
    item.excerpt?.length > 120 ? `${item.excerpt.slice(0, 120)}…` : item.excerpt;

  return (
    <article className="admin-card">
      <div className="admin-card__media">
        <img src={resolveImageSrc(item.image, imageFallback)} alt={item.title} />
      </div>
      <div className="admin-card__body">
        {badge && <p className="admin-card__badge">{badge}</p>}
        <h3 className="admin-card__title">{item.title}</h3>
        <p className="admin-card__meta">{item.meta}</p>
        {item.category && <p className="admin-card__category">{item.category}</p>}
        {excerpt && <p className="admin-card__excerpt">{excerpt}</p>}
      </div>
    </article>
  );
}
