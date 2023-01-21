function isIsogram(str) {
  if (str === "") return true;
  const upperStr = str.toUpperCase();
  const { size } = new Set(upperStr);
  return size === str.length;
}
