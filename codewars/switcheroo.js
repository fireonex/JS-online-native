function switcheroo(x) {
    let xArr = x.split('')
    let resultArr = []
    resultArr = xArr.map(el => el === 'a' ? 'b' : el === 'b' ? 'a' : el)
    return resultArr.join('')
}

switcheroo('aaabcccbaaa')  //'bbbacccabbb'

//Дана строка, состоящая из букв a, b и/или c, поменяйте
// местами буквы a и b (измените a на b и наоборот). Оставьте все вхождения c нетронутыми.
//
// Пример:
//
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'