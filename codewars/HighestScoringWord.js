function high(x) {
    const alphabetArr = {};

    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(97 + i); // 97 - это код символа 'a' в ASCII
        alphabetArr[letter] = i + 1;
    }

    const words = x.split(' ');
    let maxScore = 0;
    let highestScoringWord = '';

    for (const word of words) {
        let score = 0;
        for (const char of word) {
            score += alphabetArr[char] || 0; // добавляем значение буквы к счету слова
        }

        if (score > maxScore) {
            maxScore = score;
            highestScoringWord = word;
        }
    }

    return highestScoringWord;
}

console.log(high('abad')) // Output: abad
console.log(high('hello world')) // Output: world
console.log(high('a ab abc abcd')) // Output: abcd


//Учитывая строку слов, вам нужно найти слово с наибольшим количеством очков.
//
// Каждая буква слова набирает очки в зависимости от ее положения в алфавите a = 1, b = 2, c = 3и т. д.
//
// Например, оценка равна abad( 81 + 2 + 1 + 4).
//
// Вам нужно вернуть слово с наивысшим баллом в виде строки.
//
// Если два слова имеют одинаковую оценку, верните слово, которое встречается первым в исходной строке.
//
// Все буквы будут строчными, и все введенные данные будут действительными.