function solution(myStr) {
    let splitStr = myStr.split(/[abc]/);
    splitStr = splitStr.filter(str => str);

    if (splitStr.length === 0) {
        return ["EMPTY"];
    }

    return splitStr;
}
