function solution(number) {
    return number.split("").reduce((acc, cur) => +acc + +cur) % 9
}