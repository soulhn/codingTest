let students = [
  {
    name: "Anna",
    gender: "female",
    grades: [4.5, 3.5, 4],
  },
  {
    name: "Dennis",
    gender: "male",
    country: "Germany",
    grades: [5, 1.5, 4],
  },
  {
    name: "Martha",
    gender: "female",
    grades: [5, 4, 4, 3],
  },
  {
    name: "Brock",
    gender: "male",
    grades: [4, 3, 2],
  },
];

function studentReports(students) {
  //남자빼고
  //성적은 평균 값으로 바꾸라
  const girlArr = students.filter((a) => a.gender !== "male");

  return girlArr.map((a) => (a.grades = a.grades.reduce((acc, cur) => acc + cur) / a.grades.length));
}

console.log(studentReports(students));
