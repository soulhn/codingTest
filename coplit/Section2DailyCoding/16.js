function isIsogram(str) {
  if (str === "") return true;
  const upperStr = str.toUpperCase();
  const { size } = new Set(upperStr);
  return size === str.length;
}

//래퍼런스 코드
function isIsogram(str) {
  if (str.length === 0) {
    return true;
  }

  let cache = {};
  let strLowered = str.toLowerCase();

  for (let i = 0; i < strLowered.length; i++) {
    if (cache[strLowered[i]]) {
      return false;
    }
    cache[strLowered[i]] = true;
  }

  return true;
}
