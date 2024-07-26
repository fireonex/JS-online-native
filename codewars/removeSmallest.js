function removeSmallest(numbers) {
    if (numbers.length <= 1) return [];

    let minIndex = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[minIndex]) {
            minIndex = i;
        }
    }

    let numbersCopy = [...numbers];
    numbersCopy.splice(minIndex, 1);
    return numbersCopy;
}

removeSmallest([5, 3, 2, 1, 4])  //[5, 3, 2, 4]

//Дан массив целых чисел, удалить наименьшее значение.
// Не изменять исходный массив/список. Если есть несколько элементов
// с одинаковым значением, удалить элемент с наименьшим индексом.
// Если вы получили пустой массив/список, вернуть пустой массив/список.
//
// Не меняйте порядок оставшихся элементов.