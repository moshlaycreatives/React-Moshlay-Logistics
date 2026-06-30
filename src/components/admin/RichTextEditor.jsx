import { useEffect, useRef, useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { processImageFile } from "../../utils/imageUpload";

function isEmptyHtml(html) {
  if (!html) return true;
  return !html.replace(/<[^>]*>/g, "").trim();
}

function stripHtml(html) {
  return (html ?? "").replace(/<[^>]*>/g, "").trim();
}

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, false] }],
  [{ align: [] }],
  ["bold", "italic", "underline", "strike"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["link", "image", "blockquote", "code-block"],
];

export default function RichTextEditor({
  id,
  label,
  value = "",
  onChange,
  placeholder = "Start writing your blog content here. Use the toolbar to format your text!",
  required = false,
  minHeight = 280,
}) {
  const containerRef = useRef(null);
  const quillRef = useRef(null);
  const onChangeRef = useRef(onChange);
  const isInternalChange = useRef(false);

  onChangeRef.current = onChange;

  const insertImage = useCallback(async (quill) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute(
      "accept",
      "image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
    );
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        const dataUrl = await processImageFile(file);
        const range = quill.getSelection(true);
        quill.insertEmbed(range.index, "image", dataUrl);
        quill.setSelection(range.index + 1);
      } catch (err) {
        window.alert(err.message || "Image upload failed.");
      }
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    const editorEl = document.createElement("div");
    container.appendChild(editorEl);

    const quill = new Quill(editorEl, {
      theme: "snow",
      placeholder,
      modules: {
        toolbar: {
          container: TOOLBAR_OPTIONS,
          handlers: {
            image: function handleImage() {
              insertImage(quill);
            },
          },
        },
      },
    });

    quillRef.current = quill;

    if (value) {
      quill.root.innerHTML = value;
    }

    quill.on("text-change", () => {
      isInternalChange.current = true;
      const html = quill.root.innerHTML;
      onChangeRef.current(isEmptyHtml(html) ? "" : html);
    });

    return () => {
      quillRef.current = null;
      container.innerHTML = "";
    };
  }, [insertImage, placeholder]);

  useEffect(() => {
    const quill = quillRef.current;
    if (!quill) return;

    if (isInternalChange.current) {
      isInternalChange.current = false;
      return;
    }

    const current = isEmptyHtml(quill.root.innerHTML) ? "" : quill.root.innerHTML;
    if (value !== current) {
      const selection = quill.getSelection();
      quill.root.innerHTML = value || "";
      if (selection) {
        quill.setSelection(selection);
      }
    }
  }, [value]);

  return (
    <div className="admin-form__group admin-rich-editor">
      {label && <label htmlFor={id}>{label}</label>}
      <div
        className="admin-rich-editor__wrap"
        style={{ "--editor-min-height": `${minHeight}px` }}
      >
        <div ref={containerRef} id={id} />
      </div>
      {required && (
        <input
          type="text"
          tabIndex={-1}
          aria-hidden="true"
          className="admin-rich-editor__validator"
          value={stripHtml(value)}
          onChange={() => {}}
          required
        />
      )}
    </div>
  );
}
