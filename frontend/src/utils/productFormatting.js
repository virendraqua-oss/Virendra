export const formatCasNumber = (value) => {
  if (value === null || value === undefined) return "N/A";

  const raw = String(value).trim();
  if (!raw) return "N/A";
  if (/^n\/a$/i.test(raw)) return "N/A";

  const casRegex = /\b\d{2,7}-\d{2}-\d\b/;
  const directMatch = raw.match(casRegex);
  if (directMatch) return directMatch[0];

  const compactMatch = raw.replace(/\s+/g, "").match(casRegex);
  if (compactMatch) return compactMatch[0];

  return "N/A";
};
