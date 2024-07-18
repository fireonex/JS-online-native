function evenNumbers(array, number) {
    let reverseArr = array.reverse()
    let resultArr = []
    let count = 0;
    for (let i = 0; i < reverseArr.length; i++) {
        if (reverseArr[i] % 2 === 0 && count < number) {
            resultArr.push(reverseArr[i]);
            count++;
        }
    }
    return resultArr.reverse()
}
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)  //[-8, 26]
//Учитывая число array чисел, вернуть новый массив длины number,
// содержащий последние четные числа из исходного массива (в том же порядке).
// Исходный массив не будет пустым и будет содержать по крайней мере
// "число" четных чисел.