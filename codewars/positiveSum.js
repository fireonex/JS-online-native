function positiveSum(arr) {
    if (arr.length === 0) {
        return 0
    } else {
        let filteredArr = arr.filter((el) => el >= 0)
        if (filteredArr.length === 0) {
            return 0
        } else {
            return filteredArr.reduce((a, b) => a + b)
        }
    }
}

//positiveSum([1,-2,3,4,5])  //13
//positiveSum([1,2,3,4,5]) //15
//positiveSum([]) //0
positiveSum([-1,-2,-3,-4,-5]) //0

//You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20