//첫번째 풀이
function ocean(target, types) {
  const dp = Array(target + 1).fill(0); // 각 금액별 훔칠 수 있는 경우의 수를 저장할 배열

  // 초기값 설정
  dp[0] = 1;

  for (let i = 0; i < types.length; i++) {
    // 각 돈의 종류에 대해
    for (let j = types[i]; j <= target; j++) {
      // target 금액까지
      dp[j] += dp[j - types[i]]; // 경우의 수 누적
    }
  }

  return dp[target]; // target 금액을 훔칠 수 있는 경우의 수 반환
}

//래퍼런스
function ocean(target, type) {
  // bag 이라는 배열에 금액을 만들 수 있는 경우의 수를 기록
  // 각 인덱스 no# = 만드려는 금액 을 의미
  // ex) target = 5, type = [1, 2, 5] 면
  // bag[3] = 2  => 3원을 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용 (1*3, 1 + 2)
  // bag[4] = 3  => 4원을 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용 (1*4, 1*2 + 2, 2*2)
  // bag[5] = 4  => 5원을 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용 & 1, 2, 5 함께 사용 (1*5 , 1*3 + 2, 1 + 2*2, 5*1)
  // 0 을 만들 수 있는 경우는 아무것도 선택하지 않으면 되기 때문에 bag[0] = 1 로 초기값 설정
  let bag = [1];

  // 인덱스 no# = 만드려는 금액 이기 때문에
  // bag 을 target 금액만큼의 길이를 가진 배열을 만들어 주고,
  // 경우의 수를 저장하기 위해 초기값은 모두 0으로 만들어 준다
  for (let i = 1; i <= target; i++) bag[i] = 0;
  // 돈의 종류가 담겨있는 배열을 순차적으로 탐색
  for (let i = 0; i < type.length; i++) {
    // target 금액까지 순차적으로 1씩 증가하면서
    for (let j = 1; j <= target; j++)
      // bag의 인덱스가 type[i] 보다 큰 구간만
      // (작은 구간은 type[i]로 만들 수 없는 금액이기 때문에 탐색할 필요가 없다)
      if (type[i] <= j)
        // 기존 경우의 수에 type[i]를 뺀 금액을 만들 수 있는 경우의 수를 더해준다
        bag[j] += bag[j - type[i]];
  }
  // bag 의 target 인덱스에 target 금액을 훔칠 수 있는 경우의 수가 쌓이므로
  // 해당 값을 리턴해 준다
  return bag[target];
}

//4번 문제 금고를 털어라
function ocean(target, type) {
  // TODO: 여기에 코드를 작성합니다.

  //bag의 0번째 요소는 1로 고정
  //훔칠 수 없는 경우의 수도 1개라고 생각한다
  let bag = [1];

  //target+1 길이의 배열을 만들어준다.(bag)
  for (let i = 1; i < target + 1; i++) {
    bag[i] = 0;
  } //[1, 0, 0, 0, 0, 0, 0, 0, 0]

  //이런 식으로도 Array.fill() 메소드를 이용하여 구현할 수 있습니다.
  //const bag = new Array(target+1).fill(0);
  //bag[0] = 1;

  //type의 종류별로
  for (let i = 0; i < type.length; i++) {
    //bag을 순회하면서(이중 for 문)
    for (let j = 0; j < bag.length; j++) {
      //j가 type[i]보다 크거나 같을 경우, j = 2, type[i] = 1
      if (j >= type[i]) {
        // bag[j]의 값을 "bag[j]+bag[j-type[i]]"로 바꿔준다.
        //bag[2] = bag[2] + bag[2 - 1] = bag[2] + bag[1]
        bag[j] = bag[j] + bag[j - type[i]];
      }
    }
  }

  //for문이 끝난 후 bag[target]을 리턴해준다.
  return bag[target];
}
