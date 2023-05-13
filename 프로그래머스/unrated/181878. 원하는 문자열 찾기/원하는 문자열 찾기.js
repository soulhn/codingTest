function solution(myString, pat) {
    const upMyString = myString.toUpperCase()
    const upPat = pat.toUpperCase()
    return upMyString.includes(upPat) ? 1 : 0
}