function getOnlyAllowedToDrink(arr) {
  //배열안에 객체 존재, 이름 나이, 18세인 사람의 이름을 갖는 배열 리턴
  //18세 이상인 사람들만 가진 객체만들기
  return arr.filter((a) => a["age"] >= 18).map((a) => a.name);
}
