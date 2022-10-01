function solution(s, n) {
  return s
    .split("")
    .map((item) => {
      if (item === " ") return " ";
      const ascNum = item.charCodeAt(0);
      if (ascNum <= 90 && ascNum + n > 90) return String.fromCharCode(ascNum + n - 26);
      if (ascNum + n > 122) return String.fromCharCode(ascNum + n - 26);
      return String.fromCharCode(ascNum + n);
    })
    .join("");
}
