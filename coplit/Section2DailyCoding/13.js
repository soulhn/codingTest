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
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (temp.length === j) {
        temp.push(str[j]);
      } else {
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

//래퍼런스 코드 리팩토링?
function readVertically(arr) {
  let temp = [];
  //여기 for문이 세로로 읽어줌
  //arr을 길이 만큼 반복
  for (let i = 0; i < arr.length; i++) {
    //str에 arr의 요소 하나를 넣는다.
    let str = arr[i];
    //요소하나의 길이만큼 반복
    for (let j = 0; j < str.length; j++) {
      //temp의 길이와 str의 index가 같다면, temp안에 존재 하지 않을떄
      if (temp.length === j) {
        temp.push(str[j]);
        //temp에 str[j]를 새로 넣어준다. //temp 안에 존재한다면 그냥 뒤에다 더 붙였줌
      } else {
        temp[j] = temp[j] + str[j];
      }
    }
  }

  return temp.join("");
}
