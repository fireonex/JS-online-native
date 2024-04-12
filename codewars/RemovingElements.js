function removeEveryOther(arr){
    return arr.filter((el, index) => index % 2 === 0)
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) //[1, 3, 5, 7, 9]