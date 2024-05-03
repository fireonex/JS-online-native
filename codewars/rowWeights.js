function rowWeights(array) {
    let arr1 = []
    let arr2 = []
    if (array.length === 1) {
        return [array[0], 0]
    }
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            arr2.push(array[i])
        } else {
            arr1.push(array[i])
        }
    }

    console.log([arr1.reduce((a, b) => a + b), arr2.reduce((a, b) => a + b)])
}

//rowWeights([100,51,50,100]) //[150,151]
rowWeights([80]) //[0,1]

//Несколько человек стоят в ряд, разделившись на две команды .
// Первый человек переходит в команду 1 , второй — в команду 2 , третий — в команду 1 и так далее.

//верните новый массив из двух целых чисел, где первое — это общий вес команды 1 , а второе — общий вес команды 2 .