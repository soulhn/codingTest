function removeNumbersLargerThan(num, obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number" && obj[key] > num) {
      delete obj[key];
    }
  }
}
