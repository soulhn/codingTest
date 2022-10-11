function solution(lottos, win_nums) {
  let answer = [];
  const min = lottos.filter((x) => win_nums.includes(x)).length;
  const zeroCount = lottos.filter((x) => x === 0).length;
  const max = min + zeroCount;
  answer.push(game(max));
  answer.push(game(min));

  function game(num) {
    if (num < 2) return 6;
    if (num === 2) return 5;
    if (num === 3) return 4;
    if (num === 4) return 3;
    if (num === 5) return 2;
    if (num === 6) return 1;
  }
  return answer;
}
