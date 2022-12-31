function removeNumberValues(obj) {
  // //방법 1
  // const keys = Object.keys(obj) //배열의 키 값만 가져옴
  // for(let key of keys){
  //   if(typeof obj[key] === "number"){
  //     delete obj[key]
  //   }
  // }

  //방법 2
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      delete obj[key];
    }
  }
}
