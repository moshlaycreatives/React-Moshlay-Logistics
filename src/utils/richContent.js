/** Remove Quill blank-line paragraphs that create large vertical gaps. */
function stripEmptyParagraphs(html) {
  return html.replace(/<p[^>]*>(?:\s|&nbsp;|<br[^>]*\/?\s*)*<\/p>/gi, "");
}

/** Remove empty lines Quill often leaves right after headings. */
function stripEmptyAfterHeadings(html) {
  return html.replace(
    /(<\/h[1-3]>)\s*<p[^>]*>(?:\s|&nbsp;|<br[^>]*\/?\s*)*<\/p>/gi,
    "$1"
  );
}

/** Turn image-only paragraphs into a compact figure wrapper. */
function normalizeImageBlocks(html) {
  return html.replace(
    /<p[^>]*>\s*(<img[^>]*>)\s*(?:<br[^>]*\/?\s*)*\s*<\/p>/gi,
    '<div class="article__figure">$1</div>'
  );
}

export function cleanRichContentHtml(html) {
  if (!html) return "";
  let cleaned = html;
  let prev;
  do {
    prev = cleaned;
    cleaned = stripEmptyAfterHeadings(stripEmptyParagraphs(cleaned));
  } while (cleaned !== prev);
  return normalizeImageBlocks(cleaned).trim();
}
