function abbrevName(name) {
    let stringArr = Array.from(name)
    let newArr1 = [];
    let newArr2 = [];

    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] !== ' ') {
            newArr1.push(stringArr[i])
        } else {
            break;
        }
    }
    for (let i = stringArr.length; i > 0; i--) {
        if (stringArr[i] !== ' ') {
            newArr2.push(stringArr[i])
        } else {
            break;
        }
    }
    newArr2.reverse()


    return ( `${newArr1[0]}.${newArr2[0]}`.toUpperCase() )
}

abbrevName("Sam Harris") //"S.H"