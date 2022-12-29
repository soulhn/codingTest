//0, 1,1,2,3,5
//5 입력 시 [0, 1, 1, 2, 3, 5] 길이가 6

function fibonacci(num) {
  const result = [0];
  for (let i = 0; i < num; i++) {
    //5번 반복, 길이가 6
    //0이 들어 있으면 1 추가
    if (result.length === 1) {
      result.push(1);
      continue;
    }
    //길이가 2이상이면 직전 두수의 합을 푸시
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

// function fibonacci(num) {
//   let fibNum = [];

//   for (let i = 0; i <= num; i++) {
//     if (i === 0) {
//       fibNum.push(0);
//     } else if (i === 1) {
//       fibNum.push(1);
//     } else {
//       fibNum.push(fibNum[i - 2] + fibNum[i - 1]);
//     }
//   }

//   return fibNum;
// }
