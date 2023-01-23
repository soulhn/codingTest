let str = "khoor zruog";
let secret = 3;

function decryptCaesarCipher(str, secret) {
  const ascArr = str.split("").map((el) => el.charCodeAt(0));
  console.log(ascArr);
  return ascArr.map((el) => {
    if (el === 32) return " ";
    let ascNum = el - secret;
    if (ascNum < 97) {
      asc += 25;
    }
    return String.fromCharCode(ascNum);
  });
}

console.log(decryptCaesarCipher(str, secret));
