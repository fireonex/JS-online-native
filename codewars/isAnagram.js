// write the function isAnagram
var isAnagram = function(test, original) {
    // if (test.length !== original.length) {
    //     return false
    // } else {}
    // let lowerTest = test.toLowerCase().split('')
    // let lowerOriginal = original.toLowerCase().split('')
    // for (let i = 0; i < lowerTest.length; i++) {
    //     if (!lowerOriginal.includes(lowerTest[i])) {
    //         return false
    //     }
    // }
    // return true

    if (test.length !== original.length) {
        return false;
    }

    let lowerTest = test.toLowerCase();
    let lowerOriginal = original.toLowerCase();

    let charCount = {};

    // Заполнение объекта счетчиков для строки test
    for (let char of lowerTest) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Уменьшение счетчиков на основе строки original
    for (let char of lowerOriginal) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    // Проверка, что все счетчики равны нулю
    for (let key in charCount) {
        if (charCount[key] !== 0) {
            return false;
        }
    }

    return true;
};

//isAnagram("Buckethead", "DeathCubeK")   //true
isAnagram("dumble", "bumble")  //false