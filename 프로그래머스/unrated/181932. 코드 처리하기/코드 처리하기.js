function solution(code) {
    const strArr = code.split("")   
    let mode = 0
    let ret = ""

    for(let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "1") {
            mode = 1 - mode;
        } else {
            if (mode === 0 && i % 2 === 0) {
                ret += strArr[i];
            } else if (mode === 1 && i % 2 !== 0) {
                ret += strArr[i];
            }
        }
    }

    return ret.length === 0 ? "EMPTY" : ret;
}