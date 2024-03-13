function noBoringZeros(n) {
    if (n === 0) {
        return n
    }

    let newArr = Array.from(String(n))

    for (let i = newArr.length - 1; i >= 0; i--) {
        if (newArr[i] === '0') {
            newArr.pop()
        } else {
            break;
        }
    }
    return parseInt(newArr.join(''), 10);
}
noBoringZeros(12300)