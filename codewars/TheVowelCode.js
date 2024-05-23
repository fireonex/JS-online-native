//I love ternary operators!
function encode(string) {
    let resultArr = []
    let strArr = Array.from(string)

    for (let i = 0; i < strArr.length; i++) {
        strArr[i] === 'a'
            ? resultArr.push(1)
            : strArr[i] === 'e'
                ? resultArr.push(2)
                : strArr[i] === 'i'
                    ? resultArr.push(3)
                    : strArr[i] === 'o'
                        ? resultArr.push(4)
                        : strArr[i] === 'u'
                            ? resultArr.push(5)
                            : resultArr.push(strArr[i])
    }

    return (resultArr.join(''))
}

function decode(string) {
    let resultArr = []
    let strArr = Array.from(string)

    for (let i = 0; i < strArr.length; i++) {
        strArr[i] === '1'
            ? resultArr.push('a')
            : strArr[i] === '2'
                ? resultArr.push('e')
                : strArr[i] === '3'
                    ? resultArr.push('i')
                    : strArr[i] === '4'
                        ? resultArr.push('o')
                        : strArr[i] === '5'
                            ? resultArr.push('u')
                            : resultArr.push(strArr[i])
    }

    return (resultArr.join(''))
}

encode('hello') //'h2ll4'
decode('h2ll4') //'hello'

//a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5