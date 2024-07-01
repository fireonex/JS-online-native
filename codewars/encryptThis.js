var encryptThis = function(text) {
    let textArr = text.split(' ')
    let resultArr = []

    for (let i = 0; i < textArr.length; i++) {
        const word = textArr[i];
        let encryptedWord = '';

        if (word.length === 1) {
            encryptedWord = word.charCodeAt(0).toString();
        } else if (word.length === 2) {
            encryptedWord = word.charCodeAt(0) + word[1];
        } else {
            encryptedWord = word.charCodeAt(0) + word[word.length - 1] + word.slice(2, -1) + word[1];
        }

        resultArr.push(encryptedWord);
    }

    return resultArr.join(' ');
}

//Вам необходимо зашифровать каждое слово в сообщении, используя следующие правила:
// Первую букву необходимо преобразовать в ее код ASCII.
// Вторую букву необходимо поменять местами с последней буквой.

//encryptThis("A wise old owl lived in an oak")  //"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
//encryptThis('A')