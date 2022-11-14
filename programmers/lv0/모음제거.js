function solution(my_string) {
  return my_string.split("a").join("").split("e").join("").split("i").join("").split("o").join("").split("u").join("");
}

function solution2(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

function solution3(my_string) {
  return Array.from(my_string)
    .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
    .join("");
}
