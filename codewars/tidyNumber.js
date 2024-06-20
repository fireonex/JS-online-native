function tidyNumber(n) {
    let digitsArray = n.toString().split('').map(Number);
    for (let  i = 0; i < digitsArray.length; i++) {
        if (digitsArray[i] > digitsArray[i + 1]) {
            return false
        }
    }
    return true
}

//число, цифры которого расположены в неубывающем порядке
tidyNumber(9672)  //false
tidyNumber(2789)  //true