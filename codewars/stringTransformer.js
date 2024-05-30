function stringTransformer(str) {
    let stringReverse = str.split(' ').reverse().join(' ')
    let letterArr = Array.from(stringReverse)
    let result = []
    for (let i = 0; i < letterArr.length; i++) {
        if (letterArr[i] === letterArr[i].toUpperCase()) {
            result.push(letterArr[i].toLowerCase())
        }
        if (letterArr[i] === '') {
            result.push(letterArr[i])
        }
        if (letterArr[i] !== letterArr[i].toUpperCase()) {
            result.push(letterArr[i].toUpperCase())
        }
    }
    return result.join('')
}

//Изменить регистр каждого символа, т.е. нижний регистр в верхний регистр, верхний регистр в нижний регистр.
// Обратный порядок слов из входных данных.
// Примечание. Вам придется обрабатывать несколько пробелов, а также начальные/конечные пробелы.
//
stringTransformer('Example string') //'STRING eXAMPLE'