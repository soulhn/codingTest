function solution(balls, share) {
  function factorial(n) {
    var result = 1;
    for (var i = 2; i <= n; i++) result *= i;
    return result;
  }

  return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}
