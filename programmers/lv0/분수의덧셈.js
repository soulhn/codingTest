function solution(denum1, num1, denum2, num2) {
  let answer = [];
  function gcd(n, m) {
    return n % m === 0 ? m : gcd(m, n % m);
  }
  //최대공약수 유클리드 호제법

  let num = num1 * num2; //분모
  let denum = denum1 * num2 + denum2 * num1; //분자
  console.log(denum);
  console.log(num);
  console.log(gcd(denum, num)); //최대공약수
  let gcdNum = gcd(denum, num); //최대공약수
  answer.push(denum / gcdNum); //분자 / 최소공배수
  answer.push(num / gcdNum); //분모 / 최대공약수

  return answer;
}
