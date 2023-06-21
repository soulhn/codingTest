function solution(myString, pat) {
    const reverseMyString = myString.split("").reverse().join("");
    const reversePat = pat.split("").reverse().join("");
    
    const idx = reverseMyString.indexOf(reversePat)
    
    return myString.slice(0, myString.length - idx)
}