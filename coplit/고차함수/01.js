function returnFunction() {
  const answer = function () {
    return "Hello HoF!";
  };
  return answer;
}

function returnFunction() {
  return function () {
    return "Hello HoF!";
  };
}
