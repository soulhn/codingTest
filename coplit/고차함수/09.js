function filterCallback(func, arr) {
  const newArr = [];

  for (const i of arr) {
    func(i) ? newArr.push(i) : 0;
  }
  return newArr;
}
