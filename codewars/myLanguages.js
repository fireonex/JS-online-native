function myLanguages(results) {
    let resultArr = []
    let sortableArray = Object.entries(results);
    sortableArray.sort((a, b) => {
        return b[1] - a[1];
    });
    const sortedObj = Object.fromEntries(sortableArray);
    for (let key in sortedObj) {
        if (sortedObj[key] >= 60) {
            resultArr.push(key)
        }
    }
    return resultArr
}
myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}) //["Ruby", "Python"]
//Вам дан объект, содержащий некоторые языки и ваши результаты тестов
// на данных языках. Верните список языков, где ваш тестовый балл составляет
// не менее 60, в порядке убывания баллов.
//
// Примечание: оценки всегда будут уникальными (поэтому не будет повторяющихся значений)
//
// Примеры
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []