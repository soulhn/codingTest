function solution(myString, pat) {
    let changedString = "";

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === "A") {
            changedString += "B";
        } else if (myString[i] === "B") {
            changedString += "A";
        }
    }

    return changedString.includes(pat) ? 1 : 0;
}