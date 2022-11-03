function solution(angle) {
  if (angle < 90) return 1;
  if (angle === 90) return 2;
  if (angle < 180) return 3;
  if (angle === 180) return 4;
}

// function solution(angle) {
//   return [0, 90, 91, 180].filter(x => angle>=x).length;
// }
