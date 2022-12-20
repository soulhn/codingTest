function listPrimes(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 해당 수 까지 소수 찾기
  let answer = "2";
  let isPrime = true;
  for (let i = 3; i <= num; i += 2) {
    isPrime = true;
    for (let j = 3; j <= Math.sqrt(i); j += 2) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      answer += `-${i}`;
    }
  }
  return answer;
}

function listPrimes(num) {
  // 이중반복문
  // 9번 문제는 그냥 어떤 수가 소수인지 판단
  // 문자열을 리턴
  // ex) num = 12, '2-3-5-7-11'
  // 외부 반복문 : 2부터 자기자신(num)까지 반복하면서 이 수가 소수인지 판단
  // 내부 반복문 : 이 수가 소수인지 판단 (9번 문제)
  let result = "2";
  for (let i = 3; i <= num; i += 2) {
    let isPrime = true;
    // sqrt 사용해도 됩니다.
    for (let j = 3; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    // isPrime인 true인 경우도 있고, false인 경우도 있음
    // 조건을 다시 분기해서, 만약에 true면, (소수면) result에 더해준다.
    if (isPrime === true) {
      result = `${result}-${i}`;
    }
  }
  return result;
}
