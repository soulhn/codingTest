function classicMovies(arr, year) {
  //연도 입력 받고, 해당 연도 이전의 영화 요소 가지는 배열
  const newArr = arr.filter((a) => a.year < year);
  return newArr.map((a) => `${a.title} by ${a.director}`);
}
