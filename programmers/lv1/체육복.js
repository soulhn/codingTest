function solution(n, lost, reserve) {
  // students 초기화 - 학생들은 체육복 개수 1로 초기화
  let students = Array.from({ length: n }).fill(1);

  // 읽어버린 학생 개수 반영
  lost.forEach((target) => {
    students[target - 1]--;
  });

  // 여별 체육복 개수 반영
  reserve.forEach((target) => {
    students[target - 1]++;
  });

  // 학생들 순차적으로 접근
  for (let i = 0, len = students.length; i < len; i++) {
    // 체육복 0 | 1 을 가진 학생들을 대여 불가능이기 때문에 continue
    if (students[i] === 0 || students[i] === 1) continue;
    // 이전 번호의 학생이 있고 그 학생이 0개의 체육복을 가졌다면
    if (i !== 0 && students[i - 1] === 0) {
      // 이전 학생 증가
      students[i - 1]++;
      // 자신은 대여해줬으니 감소
      students[i]--;
    }
    // 인덱스 학생이 1개 초과한 체육을 가지고 다음 번호의 학생이 있고 그 학생이 0개의 체육복을 가졌다면
    if (students[i] > 1 && i + 1 !== len && students[i + 1] === 0) {
      // 다음 학생 증가
      students[i + 1]++;
      // 자신은 대여해줬으니 감소
      students[i]--;
    }
  }
  // 체육복 1개 이상을 가진 학생들의 수 반환
  return students.filter((v) => v >= 1).length;
}

// @@
// function solution(n, lost, reserve) {
//   for (let i = 0; i < lost.length; i++) {
//     for (let j = 0; j < reserve.length; j++) {
//       if (lost[i] === reserve[j]) {
//         lost.splice(i, 1);
//         reserve.splice(j, 1);
//       }
//     }
//   }

//   console.log(lost);
//   console.log(reserve);

//   let answer = n - lost.length;
//   console.log(answer);
//   lost.sort((a, b) => a - b);
//   reserve.sort((a, b) => a - b);

//   for (let i = 0; i < lost.length; i++) {
//     for (let j = 0; j < reserve.length; j++) {
//       if (lost[i] - 1 === reserve[j]) {
//         console.log("a");
//         answer += 1;
//         lost[i] = -1;
//         reserve[j] = -1;
//       } else if (lost[i] + 1 === reserve[j]) {
//         console.log("lost[i] : " + lost[i]);
//         console.log("resuerv[j] : " + reserve[j]);
//         answer += 1;
//         lost[i] = -1;
//         reserve[j] = -1;
//       }
//     }
//   }
//   console.log(answer);
//   return answer;
// }
