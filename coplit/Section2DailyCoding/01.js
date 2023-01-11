function transformFirstAndLast(arr) {
  if (arr.length === 0) return {};
  const answer = {};
  answer[arr[0]] = arr[arr.length - 1];
  return answer;
}
