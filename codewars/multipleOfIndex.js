function multipleOfIndex(array) {
    let newArr = []

    for(let i = 0; i < array.length; i++) {
        if (array[i] % i === 0 || array[i] === 0) {
            newArr.push(array[i])
        }
    }

    return newArr;
}

multipleOfIndex([22, -6, 32, 82, 9, 25])   //[-6, 32, 25]

//Вернуть новый массив, состоящий из элементов, кратных их собственному индексу во входном массиве (длина > 1).