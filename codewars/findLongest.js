function findLongest(array){
    array = array.map(num => num.toString());
    let maxLength = Math.max(...array.map(num => num.length));

    for (let num of array) {
        if (num.length === maxLength) {
            return parseInt(num);
        }
    }
}
findLongest([8, 900, 500]) //900
//Найдите число с наибольшим количеством цифр.
// Если два числа в массиве аргументов имеют одинаковое количество цифр, верните первое число в массиве.