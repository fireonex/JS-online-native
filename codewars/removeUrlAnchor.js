function removeUrlAnchor(url) {
    let strArr = Array.from(url)
    let newArr = []
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] !== '#') {
            newArr.push(strArr[i])
        } else {
            break;
        }
    }
    return(newArr.join(''))
}

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

removeUrlAnchor("www.codewars.com#about")