function mxdiflg(a1, a2) {
    // const x = a1.reduce((longest, current) => {
    //     return longest.length > current.length ? longest : current;
    // });
    //
    // const y = a2.reduce((longest, current) => {
    //     return longest.length < current.length ? longest : current;
    // });
    //
    // console.log(x.length - y.length)

    if (a1.length === 0 || a2.length === 0) {
        return -1;  // Возвращаем -1, если один из массивов пустой
    }

    const maxA1 = a1.reduce((max, current) => Math.max(max, current.length), 0);
    const minA1 = a1.reduce((min, current) => Math.min(min, current.length), Infinity);
    const maxA2 = a2.reduce((max, current) => Math.max(max, current.length), 0);
    const minA2 = a2.reduce((min, current) => Math.min(min, current.length), Infinity);

    const maxDifference = Math.max(
        Math.abs(maxA1 - minA2),
        Math.abs(maxA2 - minA1)
    );

    return maxDifference;
}

let a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
let a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) //13

// Вам даны два массива a1 и a2 строки. Каждая строка состоит из букв от a до z. Пусть x это
// любая строка из первого массива и y любая строка из второго массива.
//
// Find max(abs(length(x) − length(y)))
//
// Если a1 и/или a2 пусты, вернитесь -1

//
