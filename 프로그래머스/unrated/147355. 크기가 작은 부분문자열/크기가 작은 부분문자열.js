function solution(t, p) {
  const pLength = p.length;
  let count = 0;
    
    
  for (let i = 0; i < t.length-pLength+1; i++) {
      console.log(t.slice(i, i + pLength))
    if (parseInt(t.slice(i, i + pLength), 10) <= parseInt(p, 10)) {
      count++;
    }
  }
  return count;
}
