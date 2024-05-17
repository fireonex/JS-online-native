function narcissistic(value) {
    let result = 0;
    let numberArray = value.toString().split('').map(Number);
    for (let i = 0; i < numberArray.length; i++) {
        result += numberArray[i] ** numberArray.length
    }
    return result === value
}

narcissistic(153) //true
//narcissistic(487) //false
//  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 (true, === 153)

//1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 (false, !== 1652 )