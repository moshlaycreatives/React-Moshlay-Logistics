import React, { useState } from "react";

export default function DemoForm({
  className,
  style,
  children,
  noteText = "Thanks! Your request has been received — a specialist will reach out shortly.",
  onSubmit,
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setError("");

    if (onSubmit) {
      setLoading(true);
      try {
        await onSubmit(e);
        setSubmitted(true);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.response?.data?.error ||
            "Something went wrong. Please try again."
        );
      } finally {
        setLoading(false);
      }
      return;
    }

    setSubmitted(true);
    e.target.reset();
  }

  return (
    <form className={className} style={style} onSubmit={handleSubmit}>
      {children}
      {error && (
        <p style={{ marginTop: 16, color: "#c0392b", fontWeight: 600 }}>{error}</p>
      )}
      {submitted && (
        <p style={{ marginTop: 16, color: "#1e7a3c", fontWeight: 600 }}>{noteText}</p>
      )}
    </form>
  );
}
