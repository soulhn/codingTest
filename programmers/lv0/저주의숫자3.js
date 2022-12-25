// 3의 배수, 3이 들어가는 수 찾기
// 찾았다면 +1, +1해도 또그러면 +1
//반복 1부터 15까지
//15번하는데  3의배수나 3이 들어가는수라면 +1 +1해도 또그러면 +1

//둘다아니라면 그 수 리턴
// function solution(n) {

//     let answer = 1

//     function is3x(answer){
//         let count = 0
//         if( ("" + answer).includes("3") || answer%3 === 0){
//             count += 1
//             answer +=1
//             return is3x(answer)
//         } else{
//             return count
//         }

//     }

//     for(let i=1; i<=n; i++){

//         console.log(is3x(answer))
//         answer = answer + 1

//     }
//     return answer
// }

function solution(n) {
  let num = 0;
  let count = 0;

  while (count < n) {
    //n만큼 반복
    num += 1; // 숫자 +1
    if (!("" + num).includes("3") && num % 3 !== 0) count += 1;
    // 3을 포함 하지 않는다, 3으로 나누어지지 않는다 만족시 카운트 +1
  }

  return num;
}
