function solution(s) {
  return s
    .split(" ")
    .map((item) =>
      item
        .split("")
        .map((a, i) => (i % 2 === 0 ? a.toUpperCase() : a.toLowerCase()))
        .join("")
    )
    .join(" ");
}
function solution(s) {
  return s
    .split(" ")
    .map((el) =>
      el
        .split("")
        .map((el, index) => (index % 2 == 0 ? el.toUpperCase() : el.toLowerCase()))
        .join("")
    )
    .join(" ");
}
