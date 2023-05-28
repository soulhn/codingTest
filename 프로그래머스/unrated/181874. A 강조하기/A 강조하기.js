function solution(myString) {
    return myString.split("").map(el => {
        
        if("a" === el || "A" === el) return "A"
        return el.toLowerCase()
    }).join("")
}