function getAllButLastElementOfProperty(obj, key) {
  //코드 리팩토링
  if (!obj[key] || !obj[key].length || !Array.isArray(obj[key])) {
    return [];
  }
  let copy = obj[key];
  return copy.slice(0, -1);
}

// 첫번째 풀이
// function getAllButLastElementOfProperty(obj, key) {
//   if(Array.isArray(obj[key])){
//     if(!obj[key].length) return []
//     let copy = [...obj[key]]
//     copy.pop()
//     return  copy
//   }
//   return []
// }
