function dashatize(num) {
    let strArr = Array.from(num.toString());
    let resultArr = [];

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] !== '-') {
            if (Number(strArr[i]) % 2 !== 0) {
                if (resultArr.length > 0 && resultArr[resultArr.length - 1] !== '-') {
                    resultArr.push('-');
                }
                resultArr.push(strArr[i]);
                if (i !== strArr.length - 1) {
                    resultArr.push('-');
                }
            } else {
                resultArr.push(strArr[i]);
            }
        }
    }

    if (resultArr[0] === '-') {
        resultArr = resultArr.slice(1);
    }
    if (resultArr[resultArr.length - 1] === '-') {
        resultArr = resultArr.slice(0, -1);
    }

    return resultArr.join('');
}

//Учитывая целое число, верните строку с дефисом '-'до и после каждой нечетной цифры,
// но не начинайте и не заканчивайте строку дефисом.

//dashatize(86320)   //"86-3-20"
dashatize(974302)   //"9-7-4-3-02"
//dashatize(-28369)   //"28-3-6-9"

//if ()resultArr.push(strArr[i])