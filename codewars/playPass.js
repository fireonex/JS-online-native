function playPass(s, n) {
    let resArr = [];
    const alphabetSize = 26;
    for (let i = 0; i < s.length; i++) {
        let el = s[i];
        if (!isNaN(el) && el !== ' ') {
            // Проверка на цифру
            resArr.push(9 - el);
        } else if (/^[a-zA-Z]$/.test(el)) {
            // Проверка на букву
            if (el >= 'A' && el <= 'Z') {
                el = String.fromCharCode(
                    (el.charCodeAt(0) - 'A'.charCodeAt(0) + n) % alphabetSize + 'A'.charCodeAt(0)
                );
            } else if (el >= 'a' && el <= 'z') {
                el = String.fromCharCode(
                    (el.charCodeAt(0) - 'a'.charCodeAt(0) + n) % alphabetSize + 'a'.charCodeAt(0)
                );
            }
            if (i % 2 === 0) {
                resArr.push(el.toUpperCase());
            } else {
                resArr.push(el.toLowerCase());
            }
        } else {
            // Все остальные символы
            resArr.push(el);
        }
    }
    return resArr.reverse().join('');
}
playPass("I LOVE YOU!!!", 1)   //"!!!vPz fWpM J"

// сдвинуть каждую букву на заданное число, но преобразованная буква должна быть буквой (циклический сдвиг),
// замените каждую цифру ее дополнением к 9,
// сохранять такие символы, как не алфавитные и не цифровые,
// сделать каждую букву в нечетной позиции строчной, каждую букву в четной позиции прописной
// (первый символ находится в позиции 0),
// перевернуть весь результат.
// Пример:
// ваш текст: "РОЖДЕН В 2015 ГОДУ!", сдвиг 1
//
// 1 + 2 + 3 -> "КПСО ДЖО 7984!"
//
// 4 "CpSo jO 7984!"
//
// 5 "!4897 Ой oSpC"