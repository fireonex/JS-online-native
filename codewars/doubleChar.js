function doubleChar(str) {
    let newArr = Array.from(str)
    let result = []
    for (let i = 0; i < newArr.length; i++) {
        result.push(newArr[i])
        result.push(newArr[i])
    }
    return result.join('')
}

doubleChar("abcd") //"aabbccdd"