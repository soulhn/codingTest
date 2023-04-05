// 02_[Greedy] 편의점 알바
// 편의점에서 아르바이트를 하고 있는 중에, 하필이면 피크 시간대에 손님에게 거스름돈으로 줄 동전이 부족하다는 것을 알게 되었습니다.
// 현재 가지고 있는 동전은 1원, 5원, 10원, 50원, 100원, 500원으로 오름차순으로 정렬되어 있고, 각 동전들은 서로 배수 관계에 있습니다.
// 동전 개수를 최소화하여 거스름돈 K를 만들어야 합니다. 이때, 필요한 동전 개수의 최솟값을 구하는 함수를 작성해 주세요.

function partTimeJob(k) {
  // TODO: 여기에 코드를 작성하세요.
  const coinsArr = [500, 100, 50, 10, 5, 1];
  let count = 0;
  let idx = 0;
  while (k > 0) {
    if (coinsArr[idx] <= k) {
      count += Math.floor(k / coinsArr[idx]);
      k = k % coinsArr[idx];
    }
    idx++;
  }
  return count;
}

//래퍼런스 코드
function partTimeJob(k) {
  let result = 0;
  const wallet = [500, 100, 50, 10, 5, 1];
  for (let i = 0; i < wallet.length; i++) {
    if (k > 0) {
      const sum = Math.floor(k / wallet[i]);
      result += sum;
      k = k - wallet[i] * sum;
    }
  }
  return result;
}

//추가 풀이
//2번 편의점 알바
function partTimeJob(k) {
  // TODO: 여기에 코드를 작성하세요.

  let count = 0;

  //500원으로 거스름돈을 초과하기 직전만큼 거슬러준다.
  while (k - 500 >= 0) {
    //거슬러 준 돈 만큼 거스름돈에서 빼준다.
    k = k - 500;
    //거슬러 준 동전 개수만큼 count 에 더해준다.
    count = count + 1;
  }

  //빼준 거스름돈에서 그 다음 작은 단위의 동전으로 1~3을 반복한다.

  //100원으로 거스름돈을 초과하기 직전만큼 거슬러준다.
  while (k - 100 >= 0) {
    //거슬러 준 돈 만큼 거스름돈에서 빼준다.
    k = k - 100;
    //거슬러 준 동전 개수만큼 count 에 더해준다.
    count = count + 1;
  }

  //50원으로 거스름돈을 초과하기 직전만큼 거슬러준다.
  while (k - 50 >= 0) {
    //거슬러 준 돈 만큼 거스름돈에서 빼준다.
    k = k - 50;
    //거슬러 준 동전 개수만큼 count 에 더해준다.
    count = count + 1;
  }

  //500원으로 거스름돈을 초과하기 직전만큼 거슬러준다.
  while (k - 10 >= 0) {
    //거슬러 준 돈 만큼 거스름돈에서 빼준다.
    k = k - 10;
    //거슬러 준 동전 개수만큼 count 에 더해준다.
    count = count + 1;
  }

  //500원으로 거스름돈을 초과하기 직전만큼 거슬러준다.
  while (k - 5 >= 0) {
    //거슬러 준 돈 만큼 거스름돈에서 빼준다.
    k = k - 5;
    //거슬러 준 동전 개수만큼 count 에 더해준다.
    count = count + 1;
  }

  //500원으로 거스름돈을 초과하기 직전만큼 거슬러준다.
  while (k - 1 >= 0) {
    //거슬러 준 돈 만큼 거스름돈에서 빼준다.
    k = k - 1;
    //거슬러 준 동전 개수만큼 count 에 더해준다.
    count = count + 1;
  }

  //거스름돈이 0원이 되면 카운트를 리턴한다.
  return count;
}
