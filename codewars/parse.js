// Return the output array, and ignore all non-op characters
function parse( data ) {
    let dataArr = data.split('')
    let resultArr = []
    let num = 0
    for (let i = 0; i < dataArr.length; i++) {
        let el = data[i]
        if (el === 'i') {
            num += 1
        }
        if (el === 'd') {
            num -= 1
        }
        if (el === 's') {
            num = num * num
        }
        if (el === 'o') {
            resultArr.push(num)
        }
    }
    return resultArr
}

parse("iiisxxxdoso")  //[ 8, 64 ]

//Deadfish имеет 4 команды, каждая длиной в 1 символ:
//
// i увеличивает значение (изначально 0)
// d уменьшает значение
// s возводит значение в квадрат
// o выводит значение в возвращаемый массив
// Недопустимые символы следует игнорировать.