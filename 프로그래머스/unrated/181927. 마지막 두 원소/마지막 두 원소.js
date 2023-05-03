function solution(num_list) {
    const lastEl = num_list[num_list.length-1] 
    const lastPreEl = num_list[num_list.length-2]
    lastEl > lastPreEl ? num_list.push(lastEl - lastPreEl) : num_list.push(lastEl * 2)
    
    return num_list
}