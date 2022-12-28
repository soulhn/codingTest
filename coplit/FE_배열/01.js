function getType(anything) {
  if (Array.isArray(anything)) return "array";
  if (anything === null) return "null";
  return typeof anything;
}
