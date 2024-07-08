function compare(s1, s2) {
    let s1Sum = 0
    let s2Sum = 0
    s1 = s1 ? s1.toUpperCase() : '';
    s2 = s2 ? s2.toUpperCase() : '';

    const regex = /[^A-Z]/

    if (regex.test(s1)) {
        s1 = ''
    }
    if (regex.test(s2)) {
        s2 = ''
    }
    if (s1 === '' && s2 === '') return true

    for (let i = 0; i < s1.length; i++) {
        s1Sum += s1.charCodeAt(i)
    }
    for (let i = 0; i < s2.length; i++) {
        s2Sum += s2.charCodeAt(i)
    }
    return s1Sum === s2Sum
}

compare('AD', 'DD') //FALSE
//compare('zz1', '') //true

//Для сравнения считать все буквы заглавными.
// null следует рассматривать как пустые строки
// Если строка содержит символы, отличные от букв, то вся строка считается пустой.
// Ваш метод должен возвращать true, если строки равны и false если они не равны.

//"AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal