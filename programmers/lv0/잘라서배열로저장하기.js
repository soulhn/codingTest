function solution(my_str, n) {
  let counter = 0;
  let answer = [];
  while (counter < my_str.length) {
    answer.push(my_str.substr(counter, n));
    counter += n;
  }
  return answer;
}
