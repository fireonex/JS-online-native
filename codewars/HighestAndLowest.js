function highAndLow(numbers){
    let stringArr = numbers.split(" ").map(Number)
    stringArr.sort( (a, b) => {return b - a} )

    return `${stringArr[0]} ${stringArr[stringArr.length - 1]}`
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")