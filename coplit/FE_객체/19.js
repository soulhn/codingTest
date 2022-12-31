//리팩토링 코드
function extend(obj1, obj2) {
  for (let key in obj2) {
    if (!(key in obj1)) {
      obj1[key] = obj2[key];
    }
  }
}

//첫번째 코드
function extend(obj1, obj2) {
  //첫번째 객체에 두번째 객체의 속성이 있다면 패스
  //없다면 그대로 추가
  let obj1Keys = Object.keys(obj1);
  for (let key in obj2) {
    if (!obj1Keys.includes(key)) {
      obj1[key] = obj2[key];
    }
  }
}
