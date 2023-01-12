function getLengthOfLongestElement(arr) {
  return arr.reduce((acc, cur) => {
    return acc >= cur.length ? acc : cur.length;
  }, 0);
}
