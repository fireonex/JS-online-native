function gimme (triplet) {
    if (triplet[1] > triplet[2]) {
        return 0
    }
    if (triplet[1] < triplet[2]) {
        return 1
    }

}

//1 3 2
//1 2 3

//

gimme([2, 3, 1]) //0

gimme([5, 10, 14])  //1

gimme([-5, -10, -14]) //1

// функцию, которая возвращает индекс числового элемента, находящегося между двумя другими элементами
//