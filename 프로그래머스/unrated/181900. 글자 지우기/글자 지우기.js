function solution(my_string, indices) {
    return my_string.split("").filter((el, idx) =>{
        if(!indices.includes(idx)) return el
    } ).join("")
}