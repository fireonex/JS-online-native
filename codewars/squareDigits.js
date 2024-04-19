function squareDigits(num) {
    let numArr = Array.from(`${num}`)
    let resultArr = []
    for (let i = 0; i < numArr.length; i++) {
        resultArr.push( Number(numArr[i]) * Number(numArr[i]) )
    }
    return (Number(resultArr.join('')))
}

squareDigits(3212) //9414

//возвести в квадрат каждую цифру числа и соединить их.
//
// Например, если мы пропустим через функцию 9119, получится 811181,
// потому что 9 2 равно 81, а 1 2 равно 1. (81-1-1-81)