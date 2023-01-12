function filterCallback(func, arr) {
  const newArr = [];

  for (const i of arr) {
    func(i) ? newArr.push(i) : 0;
  }
  return newArr;
}

//불필요한 부분 제거
function filterCallback(func, arr) {
  const newArr = [];
  for (const i of arr) {
    if (func(i)) newArr.push(i);
  }
  return newArr;
}
