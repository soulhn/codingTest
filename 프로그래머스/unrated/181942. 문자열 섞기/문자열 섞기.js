function solution(str1, str2) {
    let answer = '';
    let length = str1.length > str2.length ? str1.length : str2.length
        
    for(let i=0; i<length; i++){
        if(i<= str1.length){
            answer += str1[i]
        }
      if(i<= str2.length){
            answer += str2[i]
        }

    }
    
    return answer;
}