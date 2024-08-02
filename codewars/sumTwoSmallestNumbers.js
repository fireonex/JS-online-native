function sumTwoSmallestNumbers(numbers) {
    let sortedArr = numbers.sort((a, b) => a - b)
    return sortedArr[0] + sortedArr[1]
}

sumTwoSmallestNumbers([15, 28, 4, 2, 43])  //6 , "Sum should be 6"
//Создайте функцию, которая возвращает сумму двух наименьших положительных чисел,
// заданных массивом из минимум 4 положительных целых чисел. Не будут переданы
// числа с плавающей точкой или неположительные целые числа.