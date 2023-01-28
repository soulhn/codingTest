function solution(id_pw, db) {
    const [id, pw] = id_pw
    let errStr = "fail"
    
    for(let loginRequest of db){
        if(loginRequest[0] === id){
            if(loginRequest[1] === pw) return "login"
            errStr = "wrong pw"
        }
    }
    return errStr
}