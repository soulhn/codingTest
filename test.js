const arr = [
  ["some", "like"],
  ["some", "dislike"],
];
function convertListToObject(arr) {
  return arr.reduce((acc, cur) => {
    // console.log(acc[cur[0]]);
    if (cur.length === 2 && !(acc[cur[0]] in acc)) {
      acc[cur[0]] = cur[1];
    }
    return acc;
  }, {});
}

convertListToObject(arr);
