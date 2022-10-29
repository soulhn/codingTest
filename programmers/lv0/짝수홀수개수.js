function solution(num_list) {
  let odd = 0;
  let even = 0;
  let answer = [];
  num_list.forEach((a) => {
    a % 2 === 0 ? even++ : odd++;
  });
  answer = [even, odd];
  return answer;
}
