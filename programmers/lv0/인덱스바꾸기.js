function solution(my_string, num1, num2) {
  let num1Str = my_string[num1];
  let num2Str = my_string[num2];
  my_string = my_string.split("");

  my_string.splice(num1, 1, num2Str);
  my_string.splice(num2, 1, num1Str);
  return my_string.join("");
}

function solution2(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}
