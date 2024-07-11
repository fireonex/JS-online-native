function sortMyString(S) {
    let sArr = S.split('')
    let even = sArr.filter((el, index) => index % 2 === 0)
    let odd = sArr.filter((el, index) => index % 2 !== 0)
    return `${even.join('')} ${odd.join('')}`
}
sortMyString("YCOLUE'VREER")  //"YOU'RE CLEVER"
// Дана строка s, ваша задача — вернуть другую строку, такую,
// что четные и нечетные символы sсгруппированы, а группы разделены
// пробелами. Четная группа идет первой, за ней следует пробел,
// а затем нечетная часть.
//
// Примеры
// input:    "CodeWars" => "CdWr oeas"
//            ||||||||      |||| ||||
// indices:   01234567      0246 1357