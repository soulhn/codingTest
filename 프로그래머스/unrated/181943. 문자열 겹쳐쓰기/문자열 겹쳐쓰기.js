function solution(my_string, overwrite_string, s) {    
    // let answer = '';
    // return answer;
    //ASD_ASD
    const beforStr = my_string.slice(0, s)
    const middleStrLegnth = (beforStr + overwrite_string).length
    return (beforStr + overwrite_string + my_string.slice(middleStrLegnth))
}