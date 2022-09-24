function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return !s
      .split("")
      .map((i) => parseInt(i, 10))
      .includes(NaN);
  } else {
    return false;
  }
}
