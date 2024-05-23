function reverseLetter(str) {
    let reverseArr = Array.from(str).reverse()
    let resultArr = []
    for (let i = 0; i < reverseArr.length; i++) {
        if (/[a-z]/.test(String(reverseArr[i]))) {
            resultArr.push(reverseArr[i])
        }
    }
    return resultArr.join('')
}

//Учитывая строку str, переверните ее и опустите все неалфавитные символы.
reverseLetter("ultr53o?n")  //"nortlu"