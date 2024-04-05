function fakeBin(x) {
    let newArr = Array.from(x)

    for (let i = 0; i < newArr.length; i++) {
        Number(newArr[i])
        if (newArr[i] < 5) {
            newArr[i] = '0'

        }
        if (newArr[i] >= 5) {
            newArr[i] = '1'
        }
    }
    return newArr.join('');
}


fakeBin('45385593107843568')  // '01011110001100111'

//Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0»,
// а любую цифру от 5 и выше на «1». Верните полученную строку.