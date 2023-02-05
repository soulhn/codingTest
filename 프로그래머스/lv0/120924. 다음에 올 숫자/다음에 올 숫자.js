function solution(common) {
    let  num = 0;
    //등차인지 등비인지
    if(common[2] - common[1] === common[1] - common[0]){
        return common[common.length-1] + common[2] - common[1]
    }
        if(common[2] / common[1] === common[1] / common[0]){
        return common[common.length-1] * common[2] / common[1]
    }
}