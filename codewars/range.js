function sortGiftCode(code) {
    let codeArr = Array.from(code)
    let sortArr = codeArr.sort()
    return sortArr.join('')
}

sortGiftCode('zyxwvutsrqponmlkjihgfedcba')  //'abcdefghijklmnopqrstuvwxyz

//Напишите функцию которая принимает строку, содержащую до 26 уникальных буквенных символов,
// и возвращает строку, содержащую те же символы в алфавитном порядке.
//
// Примеры (Вход -- => Выход):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"