function automorphic(n){
    let nStr = n.toString();
    let squareStr = (n * n).toString();

    // Сравниваем последние цифры квадрата числа с самим числом
    if (squareStr.endsWith(nStr)) {
        return "Automorphic";
    } else {
        return "Not!!";
    }
}

//Число называется автоморфным числом тогда и только тогда,
//когда его квадрат оканчивается теми же цифрами, что и само число.

automorphic(625)  //"Automorphic"
//automorphic(225)  //"Not!!"