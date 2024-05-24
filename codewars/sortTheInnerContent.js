function sortTheInnerContent(words) {
    // Разбиваем строку на массив слов
    let strArr = words.split(' ');

    // Проходим по каждому слову в массиве
    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i];
        if (word.length > 2) {
            // Извлекаем первую и последнюю букву
            let firstChar = word[0];
            let lastChar = word[word.length - 1];

            // Извлекаем внутреннее содержимое и сортируем его в обратном порядке
            let innerContent = word.slice(1, -1).split('').sort((a, b) => b.localeCompare(a)).join('');

            // Собираем слово заново
            strArr[i] = firstChar + innerContent + lastChar;
        }
    }

    // Соединяем массив обратно в строку
    return strArr.join(' ');
}

sortTheInnerContent("wait for me")  //"wiat for me"
//Вам необходимо отсортировать внутреннее содержимое каждого слова строки в порядке убывания.
//
// Внутреннее содержимое — это содержимое слова без первого и последнего символа.