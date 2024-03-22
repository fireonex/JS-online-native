function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    } else {
        let positiveArr = input.filter(i => i > 0);
        let negativeArr = input.filter(i => i < 0);

        let positiveNum = positiveArr.length;

        let negativeSum = negativeArr.reduce((sum, num) => sum + num, 0);

        return [positiveNum, negativeSum];
    }
}

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) // you should return [10, -65].