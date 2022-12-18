function solution(my_string) {
  const nums = my_string.match(/[0-9]+/g);
  return nums ? nums.map((num) => +num).reduce((acc, cur) => acc + cur) : 0;
}
