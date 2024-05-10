function wave(str) {
    // Code here
    // let newArr = []
    // let strArr = Array.from(str)
    //
    // for (let i = 0; i < str.length; i++) {
    //
    //     newArr.push(strArr)
    // }
    // for (let i = 0; i < newArr.length; i++) {
    //     for (let j = 0; j < strArr.length; j++) {
    //
    //         String(newArr[i][j]).toUpperCase()
    //     }
    // }

    let newArr = [];
    let strArr = Array.from(str);

    for (let i = 0; i < str.length; i++) {
        if (strArr[i] !== ' ') {
            let copyArr = Array.from(str);
            copyArr[i] = copyArr[i].toUpperCase();
            newArr.push(copyArr.join(''));
        }
    }

    return newArr
}

wave("hello")  //["Hello", "hEllo", "heLlo", "helLo", "hellO"]