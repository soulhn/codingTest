function solution(my_string) {
  return my_string
    .replace(/[a-z]/gi, "")
    .split("")
    .map((a) => parseInt(a, 10))
    .sort();
}
