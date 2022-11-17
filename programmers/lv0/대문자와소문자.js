function solution(my_string) {
  return [...my_string].map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase())).join("");
}
