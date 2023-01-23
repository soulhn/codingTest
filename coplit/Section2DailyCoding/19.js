//나의 풀이. 아스키 코드로 풀이
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

//래퍼런스코드
//알파벳 문자열을 만들어서 품
function decryptCaesarCipher(str, secret) {
  // 알파벳
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      // 공백은 그대로 둔다.
      result = result + " ";
    } else {
      // 현재 문자의 알파벳 순서를 구한다.
      let asis = alpha.indexOf(str[i]);
      // 복호화는 반대 방향으로 이루어기 때문에 seceret을 뺀다.
      let tobe = (asis - secret + alpha.length) % alpha.length;
      result = result + alpha[tobe];
    }
  }

  return result;
}
