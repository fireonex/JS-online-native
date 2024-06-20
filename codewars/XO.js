function XO (str) {
    let lowerString = str.toLowerCase()
    let strArr = Array.from(lowerString)
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === 'x') {
            arr1.push(strArr[i])
        } else if (strArr[i] === 'o') {
            arr2.push(strArr[i])
        }
    }
    if (arr1.length === 0 && arr2.length === 0) {
        return true
    } else return arr1.length === arr2.length
}
XO("xxOo")  //true

//Проверьте, содержит ли строка одинаковое количество символов «x» и «o».
//Метод должен возвращать логическое значение и быть нечувствительным к регистру.
//Строка может содержать любой символ.

//XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false