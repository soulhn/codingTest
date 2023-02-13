function flattenArr(arr) {
  if (arr.length === 0) return [];

  const head = arr[0];
  const tail = arr.slice(1);

  if (Array.isArray(head)) {
    return flattenArr([...head, ...tail]);
  } else {
    return [head, ...flattenArr(tail)];
  }
}

console.log(flattenArr(arr));
