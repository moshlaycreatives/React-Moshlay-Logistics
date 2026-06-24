import React, { useState } from "react";

export default function DemoForm({
  className,
  style,
  children,
  noteText = "Thanks! Your request has been received — a specialist will reach out shortly.",
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <form className={className} style={style} onSubmit={handleSubmit}>
      {children}
      {submitted && (
        <p style={{ marginTop: 16, color: "#1e7a3c", fontWeight: 600 }}>{noteText}</p>
      )}
    </form>
  );
}
