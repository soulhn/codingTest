function solution(a, b, c) {
    if(a === b && b === c) return (a+b+c) * (Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2)) * (Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3))
    
    if(new Set([a,b,c]).size === 3) return a+b+c
    
    if((a === b && a !== c) || (a === c && a !== b)|| (b === c && b !== a)){
        return (a+b+c) * (Math.pow(a,2) + Math.pow(b,2)+Math.pow(c,2))
    }
    
    
    
}