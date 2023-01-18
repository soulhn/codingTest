//배열의 가장 긴 길이 찾기
//배열의 가장 긴 길이 만큼 반복
//배열 순회 index를 벗어나 undefinded가 아니라면 결과에 추가

function readVertically(arr) {
  const numArr = arr.map((el) => el.length);
  const maxLength = Math.max(...numArr);
  let result = "";
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] !== undefined) {
        result += arr[j][i];
      }
    }
  }
  return result;
}

//래퍼런스 코드
function readVertically(arr) {
  let temp = [];
  //배열의 길이 만큼 반복
  for (let i = 0; i < arr.length; i++) {
    //str에 배열에 들어온 문자열하나 할당
    let str = arr[i];
    //문자열 하나의 길이 만큼 반복
    for (let j = 0; j < str.length; j++) {
      //temp의 길이와 str의 j번째 요소의 idx와 같다면
      if (temp.length === j) {
        //temp에 str[j]를 넣는다
        temp.push(str[j]);
      } else {
        //temp의 길이와 str의 j번째 요소의 idx가 같지않으면
        temp[j] = temp[j] + str[j];
      }
    }
  }

  let result = "";
  for (let i = 0; i < temp.length; i++) {
    result = result + temp[i];
  }

  return result;
}
