function maxTriSum(numbers){
    let sortedArr = numbers.sort((a, b) => b - a)
    let filteredArr = [...new Set(sortedArr)]
    return filteredArr[0] + filteredArr[1] + filteredArr[2]
}

maxTriSum([2,1,8,0,6,4,8,6,2,4])  //18

//1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
// Объяснение:
// Так как триплет, который максимизирует сумму {6,8,3} в порядке, их сумма равна (17)
//
// Примечание: при суммировании не учитываются повторения, т. е. числа складываются только один раз .