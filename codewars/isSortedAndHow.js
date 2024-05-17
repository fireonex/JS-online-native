function isSortedAndHow(array) {

    const isAscending = array.slice().sort((a, b) => a - b).every((val, index) => val === array[index]);
    const isDescending = array.slice().sort((a, b) => b - a).every((val, index) => val === array[index]);

    if (isAscending) {
        return("yes, ascending")
    }
    if (isDescending) {
        return("yes, descending")
    }
    else {
        return("no")
    }
}

isSortedAndHow([15, 7, 3, -8]) //'yes, descending'

//"yes, ascending"- если числа в массиве отсортированы по возрастанию
// "yes, descending"- если числа в массиве отсортированы по убыванию
// "no"- в противном случае