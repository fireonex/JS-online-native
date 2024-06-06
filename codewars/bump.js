function bump(x){
    let strArr = Array.from(x)
    let count = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === 'n') {
            count++
        }
    }
    if (count <= 15) {
        return "Woohoo!"
    } else {
       return "Car Dead"
    }
}

//Дана строка, показывающая ровную дорогу ( _) или неровности ( n).
//Если вы сможете благополучно добраться до дома, встретив 15 bumps or less,
// вернитесь Woohoo!, в противном случае вернитесь.Car Dead

bump("__nn_nnnn__n_n___n____nn__nnn")  //"Woohoo!"