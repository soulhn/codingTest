function solution(n, lost, reserve) {
    //앞사람과 뒷사람에게만 빌려줄 수 있다.
    
    const filterLost = lost.filter((el) => !reserve.includes(el)).sort((a, b) => a - b);
    const filterReserve = reserve.filter((el) => !lost.includes(el)).sort((a, b) => a - b);

        
    for(let i=0; i<filterReserve.length; i++){
        if(filterLost.indexOf(filterReserve[i] - 1) !== -1){filterLost.splice(filterLost.indexOf(filterReserve[i]-1),1)}
        else if(filterLost.indexOf(filterReserve[i] + 1) !== -1){filterLost.splice(filterLost.indexOf(filterReserve[i]+1),1)}
    }
    
    return n - filterLost.length
}