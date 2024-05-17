function findOutlier(integers) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenCount += 1
        } else {
            oddCount += 1
        }
    }
    if (evenCount > oddCount) {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 !== 0) {
                return integers[i]
            }
        }
    } else {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 === 0) {
                return integers[i]
            }
        }
    }
}

// Массив либо полностью состоит из нечетных целых чисел,
// либо полностью состоит из четных целых чисел, за исключением одного целого числа N
//even - чётное, odd - нечётное

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])  //11 (the only odd number)
findOutlier([160, 3, 1719, 19, 11, 13, -21])  //160 (the only even number)