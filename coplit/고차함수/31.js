//두번째로 푼 코드 map
function studentReports(students) {
  //남자빼고
  //성적은 평균 값으로 바꾸라
  const girlArr = students.filter((a) => a.gender !== "male");

  return girlArr.map((a) => {
    a.grades = a.grades.reduce((acc, cur) => acc + cur) / a.grades.length;
    return a;
  });
}

//처음으로 푼 코드 forEach
function studentReports(students) {
  //남자빼고
  //성적은 평균 값으로 바꾸라
  const girlArr = students.filter((a) => a.gender !== "male");
  girlArr.forEach((a) => (a.grades = a.grades.reduce((acc, cur) => acc + cur) / a.grades.length));
  return girlArr;
}
