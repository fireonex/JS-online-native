function gimme (triplet) {
    let arrCopy = [...triplet]
    let sorted = arrCopy.sort((a, b) => a - b)[1]
    return triplet.indexOf(sorted)
}

gimme([-5, -10, -14])   //1

// В рамках этого ката вам необходимо создать функцию, которая при наличии
// триплета возвращает индекс числового элемента, который находится между
// двумя другими элементами.