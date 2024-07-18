function pigIt(str) {
    let strArr = str.split(' ')
    let resultArr = []
    const regex = /[a-zA-Z]/;
    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i]
        if (regex.test(word)) {
            let wordCopy = word.slice(1) + word[0] + 'ay';
            resultArr.push(wordCopy);
        } else {
            resultArr.push(word)
        }
    }
    return resultArr.join(' ')
}

pigIt('Pig latin is cool')   //'igPay atinlay siay oolcay'

// Переместите первую букву каждого слова в конец,
// затем добавьте "ay" в конец слова. Оставьте знаки препинания нетронутыми.

//pigIt('Hello world !');     // elloHay orldway !