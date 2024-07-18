function removeDuplicates(arr) {
    // Ваша реализация
    //let copyArr = [...arr]
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        }
    }
    console.log(result)
}

removeDuplicates(['1', '2', '3', '3', '2', '6']) // ['1', '2', '3', '6']

