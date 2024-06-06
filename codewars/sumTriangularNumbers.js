function sumTriangularNumbers(n) {
    if (n <= 0) {
        return 0;
    } else {
        let result = 0
        for (let count = 1; count <= n; count++) {
            result += (count * (count + 1)) / 2
        }
        return result
    }
}
sumTriangularNumbers(6)  //56



//Треугольное число: «любая серия чисел (1, 3, 6, 10, 15 и т. д.),
// полученная путем непрерывного суммирования натуральных чисел 1, 2, 3, 4, 5 и т. д.».

//например, если дано 4: 1 + 3 + 6 + 10 = 20
