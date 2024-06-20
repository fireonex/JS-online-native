function disariumNumber(n) {
    let nArr = n.toString().split('').map(Number)
    let degreeArr = []
    for (let i = 0; i < nArr.length; i++) {
        degreeArr.push( nArr[i] ** (i + 1) )
    }
    if (degreeArr.reduce((a, b) => a + b) === n) {
        return "Disarium !!"
    } else {
        return "Not !!"
    }
}
disariumNumber(135)   //"Disarium !!"
//Число Дизария (Disarium number) — это число, которое равно сумме своих цифр,
// возведенных в степень их позиции.

//возведение в степень **
