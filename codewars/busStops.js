var number = function (busStops) {
    let arr1 = []
    let arr2 = []

    let smoothedArr = busStops.flat()
    for (let i = 0; i < smoothedArr.length; i++) {
        if (i % 2 === 0) {
            arr1.push(smoothedArr[i])
        } else {
            arr2.push(smoothedArr[i])
        }
    }

    return arr1.reduce((a, b) => a + b) - arr2.reduce((a, b) => a + b)

    // for (var i = 0; i < busStops.length; i++) {
    //     for (var j = 0; j < busStops[i].length; j++) {
    //         if (j === 0) {
    //             arr1.push(busStops[i][j])
    //         } else {
    //             arr2.push(busStops[i][j])
    //         }
    //     }
    // }
}

number([[10, 0], [3, 5], [5, 8]]) //5

//Элементы каждой пары представляют собой количество людей, входящих в автобус (первый элемент)
// и количество людей, выходящих из автобуса (второй элемент) на остановке.
//
// Ваша задача — вернуть количество людей, которые все еще находятся в автобусе после последней
// остановки (после последнего массива). Несмотря на то, что это последняя автобусная остановка,
// автобус может быть не пустым