function checkExam(array1, array2) {
    let result = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            result += 4;
        }
        if (array1[i] !== array2[i] && array2[i] !== '') {
            result -= 1;
        }
    }
    if (result < 0) {
        return 0;
    } else {
        return result
    }
}

checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) //0

//Два массива не пусты и имеют одинаковую длину. Возвращает оценку
// за этот массив ответов, давая +4 за каждый правильный ответ,
// -1 за каждый неправильный ответ и +0 за каждый пустой ответ,
// представленный в виде пустой строки

//первый массив - ключи, второй - ответы