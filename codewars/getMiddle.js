function getMiddle(s) {
    let newArr = Array.from(s)

    if (newArr.length % 2 === 0) {
        return(newArr[(newArr.length / 2) - 1] + newArr[newArr.length / 2])
    } else {
        return(newArr[Math.floor(newArr.length / 2)])
    }
}

//вернуть средний символ слова. Если длина слова нечетная, верните средний символ.
// Если длина слова четная, верните 2 средних символа.

getMiddle("test")  //"es"

//getMiddle("testing") //"t"