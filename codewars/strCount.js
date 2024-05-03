function strCount(str, letter){
    let newArr = Array.from(str)
    let resultArr = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === letter) {
            resultArr.push(letter)
        }
    }
    return resultArr.length
}

//strCount('Hello', 'o') //1

strCount("Hello", "l")  //==>  2