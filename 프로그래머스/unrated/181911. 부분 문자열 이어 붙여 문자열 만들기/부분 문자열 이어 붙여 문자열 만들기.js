function solution(my_strings, parts) {
    let result = '';

    for(let i = 0; i < my_strings.length; i++) {
        let part = parts[i];
        let s = part[0];
        let e = part[1] + 1;

        result += my_strings[i].substring(s, e);
    }

    return result;
}