function take(num, arr) {
  if (arr.length === 0) return [];
  if (num >= arr.length) return arr;
  // if(num>arr.length) return arr
  // if(num === arr.length) return arr
  return take(num, arr.slice(0, arr.length - 1));
}
