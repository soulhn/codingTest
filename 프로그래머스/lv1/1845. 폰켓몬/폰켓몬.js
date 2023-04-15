function solution(nums) {
    const numObj = {}
     const numsLength = nums.length / 2;
    function addValue(key){
        if(!numObj.hasOwnProperty(key)){
            numObj[key] = 1;
        } else {
            numObj[key] ++
        }
    }

    nums.forEach((el)=> addValue(el))
    
    
    return Object.keys(numObj).length > numsLength ? numsLength : Object.keys(numObj).length;
    
}