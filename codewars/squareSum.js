function squareSum(numbers){
    let result = 0;
    numbers.map(el => {result += el * el})
    return result;
}
squareSum([0, 3, 4, 5]);
//Complete the square sum function so that it squares
// each number passed into it and then sums the results together.
//
// For example, for [1, 2, 2] it should return 9