function solution(price) {
  if (price >= 500000) return Math.floor(price * 0.8); //50만원이상 early return
  if (price >= 300000) return Math.floor(price * 0.9); //30만원이상
  if (price >= 100000) return Math.floor(price * 0.95); //10만원 이상
  return price; // 그 이하
}
