function replace (s) {
    let newArr = Array.from(s)

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 'a' || newArr[i] === 'e' || newArr[i] === 'i' || newArr[i] === 'o' || newArr[i] === 'u'
            || newArr[i] === 'A' || newArr[i] === 'E' || newArr[i] === 'I' || newArr[i] === 'O' || newArr[i] === 'U') {

            newArr[i] = '!'
        }
    }
    return (newArr.join('').toString())
}

replace("ABCDE")  //"!BCD!"  //aeiouAEIOU

// function replace(s) {
//     return s.replace(/[aeiouAEIOU]/g, '!');
// }
