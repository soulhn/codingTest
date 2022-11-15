function solution(s) {
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "Z") {
      s.splice(i - 1, 2);
      i = 0;
    }
  }
  if (s.length === 0) return 0;
  return s.map((i) => parseInt(i, 10)).reduce((acc, cur) => acc + cur);
}
