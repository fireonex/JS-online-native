function adjacentElementsProduct(array) {
    let resultArr = []
    for (let i = 0; i < array.length; i++) {
        resultArr.push(array[i] * array[i + 1])
    }

    let result = resultArr.sort((a, b) => b - a)
    return result[0]
}

//Дан массив целых чисел. Найдите максимальный результат,
// полученный в результате умножения двух соседних чисел в массиве.

adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])  //return 50