function convertListToObject(arr) {
  return arr.reduce((acc, cur) => {
    //cur 길이가 2이고
    //acc 안에 cur가 없다면 ?
    // 왜? { some: 'like' } 가 { some: 'dislike' } 바뀔까요..
    if (cur.length === 2 && !(cur[0] in acc)) {
      [cur[0]] = cur[1];
    }
    return acc;
  }, {});
}
