function decryptCaesarCipher(str, secret) {
  const ascArr = str.split("").map((el) => el.charCodeAt(0));
  console.log(ascArr);
  return ascArr
    .map((el) => {
      if (el === 32) return " ";
      let ascNum = el - secret;
      if (ascNum < 97) {
        ascNum += 26;
      }
      return String.fromCharCode(ascNum);
    })
    .join("");
}
