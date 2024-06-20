function incrementer(nums) {
    if (nums.length === 0) {
        return []
    }
    let newArr = []
    let arr;
    for (let  i = 0; i < nums.length; i++) {
        if ((nums[i] + i + 1) < 10) {
            newArr.push(nums[i] + i + 1)
        } else {
            arr = (nums[i] + i + 1).toString().split('').map(Number)
            newArr.push(arr[arr.length - 1])
        }
    }
    return newArr
}
incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]) //[2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]

//Учитывая ввод массива цифр, верните массив, в котором каждая цифра увеличивается
// на ее позицию в массиве: первая цифра будет увеличена на 1, вторая цифра на 2 и т. д.
// Обязательно начните отсчет своих позиций с 1 ( а не 0).
//
// Ваш результат может содержать только однозначные числа, поэтому, если сложение цифры
// с ее позицией дает вам многозначное число, должна быть возвращена только последняя цифра числа.
//
// Примечания:
// вернуть пустой массив, если ваш массив пуст

//[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2