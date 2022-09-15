// 내가 푼 답 (2022.09.14)
function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}
// 다른 사람의 답안
function solution(arr) {
  return arr.reduce((acc, curr) => acc + curr) / arr.length;
}

//평균 구하기 reduce 추가 학습

const numbers = [1, 2, 3, 4];

const sum1 = numbers.reduce((accumulator, currentNumber) => {
  console.log(`accumulator :  ${accumulator}`);
  console.log(`currentNumber :  ${currentNumber}`);
  const result = accumulator + currentNumber;
  console.log(`result :  ${result}`);
  return result;
});
