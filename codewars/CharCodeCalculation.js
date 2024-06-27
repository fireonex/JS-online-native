function calc(x){
    let total1Str = '';
    for (let i = 0; i < x.length; i++) {
        total1Str += x.charCodeAt(i);
    }
    let total1Arr = Array.from(total1Str, Number);
    let total1 = total1Arr.reduce((acc, num) => acc + num, 0);
    let total2 = 0;
    for (let i = 0; i < total1Arr.length; i++) {
        if (total1Arr[i] === 7) {
            total2 += 1
        } else {
            total2 += total1Arr[i]
        }
    }

    return total1 - total2
}

calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')  //96
//Дана строка, преобразуйте каждый символ в его код ASCII
// и объедините их вместе, чтобы создать число — назовем это число total1:
//
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Затем замените все случаи числа 7на число 1и назовите это число «total2»:
//
// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Затем верните разницу между суммой цифр в total1и total2