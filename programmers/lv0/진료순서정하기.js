function solution(emergency) {
  let sortEmergency = [...emergency].sort((a, b) => b - a);
  let answer = [];
  for (let i = 0; i < emergency.length; i++) {
    for (let j = 0; j < emergency.length; j++)
      if (emergency[i] === sortEmergency[j]) {
        answer.push(j + 1);
      }
  }
  return answer;
}

// function solution(emergency) {
//     let sorted = emergency.slice().sort((a,b)=>b-a);
//     return emergency.map(v=>sorted.indexOf(v)+1);
// }
