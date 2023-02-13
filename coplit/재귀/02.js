function isOdd(num) {
  if (num === 0) return false;
  if (num === -1) return true;
  return num > 0 ? isOdd(num - 2) : isOdd(num + 2);
  // 아래 코드가 조금 더 좋아보임
  // if (num < 0) {
  //   return isOdd(-num);
  // return isOdd(num - 2);
}
