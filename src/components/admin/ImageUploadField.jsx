import { useRef, useState } from "react";
import { processImageFile, resolveImageSrc } from "../../utils/imageUpload";

export default function ImageUploadField({
  id,
  label,
  value,
  onChange,
  fallback = "news-1.svg",
  required = true,
}) {
  const inputRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setLoading(true);

    try {
      const dataUrl = await processImageFile(file);
      onChange(dataUrl);
    } catch (err) {
      setError(err.message || "Upload failed.");
      onChange("");
    } finally {
      setLoading(false);
      e.target.value = "";
    }
  }

  function handleRemove() {
    onChange("");
    setError("");
    if (inputRef.current) inputRef.current.value = "";
  }

  const previewSrc = value ? resolveImageSrc(value, fallback) : "";

  return (
    <div className="admin-form__group">
      <label htmlFor={id}>{label}{required ? " *" : ""}</label>

      {previewSrc ? (
        <div className="admin-upload__preview">
          <img src={previewSrc} alt="Upload preview" />
          <div className="admin-upload__preview-actions">
            <button
              type="button"
              className="admin-btn admin-btn--ghost"
              onClick={() => inputRef.current?.click()}
            >
              Change Image
            </button>
            <button type="button" className="admin-btn admin-btn--danger" onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      ) : (
        <label className="admin-upload__dropzone" htmlFor={id}>
          <span className="admin-upload__icon">+</span>
          <span className="admin-upload__text">
            {loading ? "Processing image…" : "Click to upload image"}
          </span>
          <span className="admin-upload__hint">JPG, PNG, WebP, GIF or SVG · Max 5MB</span>
        </label>
      )}

      <input
        ref={inputRef}
        id={id}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
        onChange={handleFileChange}
        className="admin-upload__input"
        required={required && !value}
      />

      {error && <p className="admin-form__error" style={{ marginTop: 10, marginBottom: 0 }}>{error}</p>}
    </div>
  );
}
