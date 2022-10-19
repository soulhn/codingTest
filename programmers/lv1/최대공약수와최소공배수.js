function solution(n, m) {
  let gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m));
  //최대공약수
  let lcm = (n, m) => (n * m) / gcd(n, m);
  //최소공배수
  return [gcd(n, m), lcm(n, m)]; //유클리드호재법
}
