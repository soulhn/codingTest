function solution(my_string, alp) {
    return my_string.split("").map(el => {
        if(el === alp) return el.toUpperCase()
        return el
    }).join("")
}