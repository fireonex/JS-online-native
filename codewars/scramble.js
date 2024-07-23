function scramble(str1, str2) {
    let charCount = {};
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

//scramble('rkqodlw', 'world') //True
//scramble('cedewaraaossoqqyt', 'codewars')  //True
//scramble('katas', 'steak') //False

//Завершите функцию scramble(str1, str2), которая возвращает
// значение true, если часть str1 символов можно переставить так,
// чтобы они совпадали str2, в противном случае возвращает значение false.
//
// Примечания:
// Будут использоваться только строчные буквы (az). Знаки препинания и цифры не будут включены.
// Необходимо учитывать производительность.