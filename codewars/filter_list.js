function filter_list(l) {
    let resultArr = []
    for (let i = 0; i < l.length; i++) {
        if (Number(l[i]) === l[i]) {
            resultArr.push(l[i])
        }
    }
    return resultArr
    // Return a new array with the strings filtered out
}

filter_list([1, 2, 'aasf', '1', '123', 123])  //[1,2,123]
