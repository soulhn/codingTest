function solution(sizes) {
    //가로 최대 길이
    //세로 최대 길이
    //둘중 최대 값 구하기
    //가로가 최대라면 세로를 돌려서 가장 큰 값
    const sortSizes = sizes.map(el => el.sort((a,b)=> b-a)) //오름 차순
    const maxWidth = Math.max(...sortSizes.map(el => el[0]))
    const maxHeight = Math.max(...sortSizes.map(el => el[1]))
    
    
    return maxWidth * maxHeight
}