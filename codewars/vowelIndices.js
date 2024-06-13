function vowelIndices(word){
    let lowerCaseArr = Array.from(word.toLowerCase())
    let resultArr = []
    for (let i = 0; i < lowerCaseArr.length; i++) {
        if (/[aeiouy]/.test(lowerCaseArr[i])) {
            resultArr.push(i + 1)
        }
    }
    return resultArr
}
vowelIndices("orange")  //[1,3,6]

//Мы хотим узнать индекс гласных в данном слове, например, в слове super две гласные (вторая и четвертая буквы).
// Итак, учитывая строку «супер», мы должны вернуть [2, 4].

//Гласные в этом контексте относятся к: aeiouy (включая верхний регистр).
// Это индексируется с [1..n](не индексируется с нуля!)