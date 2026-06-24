const MAX_WIDTH = 1200;
const MAX_SIZE_MB = 5;
const ACCEPT = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];

export function resolveImageSrc(image, fallback = "news-1.svg") {
  if (!image) return `/images/${fallback}`;
  if (image.startsWith("data:") || image.startsWith("http")) return image;
  return `/images/${image}`;
}

export function processImageFile(file) {
  return new Promise((resolve, reject) => {
    if (!ACCEPT.includes(file.type)) {
      reject(new Error("Please upload JPG, PNG, WebP, GIF or SVG."));
      return;
    }

    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      reject(new Error(`Image must be under ${MAX_SIZE_MB}MB.`));
      return;
    }

    if (file.type === "image/svg+xml") {
      readAsDataUrl(file).then(resolve).catch(() => reject(new Error("Could not read image.")));
      return;
    }

    readAsDataUrl(file)
      .then((dataUrl) => compressDataUrl(dataUrl, file.type))
      .then(resolve)
      .catch(() => reject(new Error("Could not read image.")));
  });
}

function readAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function compressDataUrl(dataUrl, mimeType) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > MAX_WIDTH) {
        height = Math.round((height * MAX_WIDTH) / width);
        width = MAX_WIDTH;
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      const outputMime = mimeType === "image/png" ? "image/png" : "image/jpeg";
      const quality = outputMime === "image/jpeg" ? 0.82 : undefined;
      resolve(canvas.toDataURL(outputMime, quality));
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}
