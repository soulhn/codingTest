//첫번째 풀이
function firstCharacter(str) {
  if (str === "") return str;
  return str
    .split(" ")
    .map((el) => el[0])
    .join("");
}
