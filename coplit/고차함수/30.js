//reduce와 친해진 후
function findShortestWord(arr) {
  const strArr = arr.filter((el) => typeof el === "string");
  if (strArr.length === 0) return "";
  return strArr.reduce((acc, cur) => (acc.length > cur.length ? cur : acc));
}

//처음으로 푼 코드
function findShortestWord(arr) {
  //가장 짧은 문자열 리턴
  let answer = "";
  const strArr = arr.filter((a) => typeof a === "string");
  if (strArr.length === 0) return "";
  //길이가 젤 짧은 거 구하기
  //길이만 담긴 배열 만들기 => 최솟값 인덱스 => indexOf() => 리턴
  const numArr = strArr.map((a) => a.length);
  console.log(numArr);
  return strArr[numArr.indexOf(Math.min(...numArr))];
}
