function capitalize(s) {
    let newArr = Array.from(s)
    let result1 = []
    let result2 = []
    for (let i = 0; i < newArr.length; i++) {
        if (i === 0 || i % 2 === 0) {
            result1.push(newArr[i].toUpperCase())
            result2.push(newArr[i].toLowerCase())
        } else {
            result1.push(newArr[i].toLowerCase())
            result2.push(newArr[i].toUpperCase())
        }
    }

    return [result1.join(''), result2.join('')]
}

capitalize("abcdef")  //['AbCdEf', 'aBcDeF']