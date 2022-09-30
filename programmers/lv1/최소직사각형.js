function solution(sizes) {
  const maxWidth = Math.max(...sizes.map((item) => Math.min(...item)));
  const maxHeight = Math.max(...sizes.map((item) => Math.max(...item)));
  return maxWidth * maxHeight;
}
