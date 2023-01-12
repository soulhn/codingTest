function mapCallback(func, arr) {
  const newArr = [];

  for (const i of arr) {
    newArr.push(func(i));
  }
  return newArr;
}
