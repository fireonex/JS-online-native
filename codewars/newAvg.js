function newAvg(arr, newavg) {
    if (arr.length) {
        let arrSum = arr.reduce((a, b) => a + b)
        let res = 0;
        res = Math.ceil(newavg * (arr.length + 1) - arrSum)
        if (res <= 0) {
            throw new Error("Expected New Average is too low")
        } else {
            return res
        }
    } else {
        return newavg
    }
}

newAvg([14, 30, 5, 7, 9, 11, 15], 92) //645

//Функция должна возвращать ожидаемое пожертвование (округленное до ближайшего целого числа),
// что позволит достичь среднего значения navg.
//
// Если последнее пожертвование будет неположительным числом (<= 0)
// то throw new error ("Expected New Average is too low")