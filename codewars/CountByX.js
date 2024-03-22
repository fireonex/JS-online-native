function countBy(x, n) {
    let z = [];
    for (let i = x; i !== n; i++) {
        if (i % x === 0) {
            z.push(i)
        }
    }
    return z;
}

countBy(2, 5)  //[2,4,6,8,10]