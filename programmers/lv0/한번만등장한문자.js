function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}

function solution2(s) {
  const dict = {};
  // dict에 각 스펠링 별 등장 횟수 정리
  s.split("").forEach((a) => (dict[a] !== undefined ? (dict[a] += 1) : (dict[a] = 1)));
  // 등장 횟수가 한 번인 문자를 오름차 순 정렬
  return Object.entries(dict)
    .map((a) => (a[1] === 1 ? a[0] : null))
    .filter((a) => a !== null)
    .sort()
    .join("");
}
