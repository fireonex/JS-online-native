function divCon(x){
    if (x.length === 0) {
        return 0
    }
    let sum = 0;
    let subtractArr = []
    for (let i  = 0; i < x.length; i++) {
        if (typeof x[i] === 'string') {
            subtractArr.push(Number(x[i]))
        } else {
            sum = sum + x[i]
        }

    }
    if (subtractArr.length === 0) {
        return sum
    } else {
        let subtract = subtractArr.reduce((a, b) => a + b)
        return sum - subtract
    }
}
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]) //14
// Учитывая смешанный массив числовых и строковых представлений целых чисел,
// сложите не строковые целые числа и вычтите сумму строковых целых чисел.
//
// Вернуть как число.