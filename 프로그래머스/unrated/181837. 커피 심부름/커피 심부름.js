function solution(order) {
    let total = 0;

    order.forEach(item => {
        if(item.includes("americano")) {
            total += 4500;
        } else if(item.includes("cafelatte")) {
            total += 5000;
        } else if(item === "anything") {
            total += 4500; 
        }
    });

    return total;
}