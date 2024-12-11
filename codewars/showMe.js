function showMe(yourID) {
    const regex = /^[a-zA-Z-]+$/;
    if (!regex.test(yourID)) {
        return false
    }
    // Проверяем, что строка не начинается и не заканчивается тире
    if (yourID.startsWith('-') || yourID.endsWith('-')) {
        return false;
    }

    // Проверяем, что нет двух подряд идущих тире
    if (yourID.includes('--')) {
        return false;
    }

    // Разбиваем строку на слова
    const words = yourID.split('-');

    // Проверяем каждое слово
    for (let word of words) {
        // Проверяем минимальную длину слова
        if (word.length < 2) {
            return false;
        }

        // Проверяем, что первая буква заглавная
        const firstChar = word.charAt(0);
        if (firstChar < 'A' || firstChar > 'Z') {
            return false;
        }

        // Проверяем, что остальные буквы строчные
        const restOfWord = word.slice(1);
        const restOfWordRegex = /^[a-z]+$/;
        if (!restOfWordRegex.test(restOfWord)) {
            return false;
        }
    }

    // Если все проверки пройдены, возвращаем true
    return true;
}

showMe("Jean-Eluard")  //true
showMe("Le Mec")  //false


// является ли данный аргумент именем или нет, возвращая true или false.
//
// Обратите внимание, что
//
// Строка будет представлять собой либо имя, состоящее из одного слова,
// либо имя, написанное через дефис, слова которого будут связаны знаком «-».
// Слова могут начинаться только с заглавной буквы, а затем должны
// идти строчные буквы (от a до z).