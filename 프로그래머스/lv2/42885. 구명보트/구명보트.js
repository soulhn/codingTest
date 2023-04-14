function solution(people, limit) {
    //왼쪽, 오른쪽
    let left = 0;
    let right = people.length -1;
    let count = 0;
    const sortPeople = people.sort((a,b) => a-b);
    
    while(left <= right){
//         젤 무거운 사람과 젤 가벼운 사람이 탈 수 있다면
        if(sortPeople[left]+sortPeople[right]<=limit){
            count++
            left++
            right--
        }else{
            count++
            right--
        }
    }
    return count
}