function evensAndOdds(num){
    if (num % 2 === 0) {
        return num.toString(2)
    } else {
        return num.toString(16)
    }
}

evensAndOdds(12800) //'11001000000000'
evensAndOdds(8172381723) //'1e71ca61b'

//Если число четное, преобразуйте его в двоичную систему счисления.
// Если число нечетное, преобразуйте его в шестнадцатеричное.
// Числа будут положительными. Шестнадцатеричная строка должна быть в нижнем регистре.