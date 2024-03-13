function digitize(n) {
    let newStr = `${n}`;
    let newArr = Array.from(newStr)
    newArr = newArr.map(item => +item);
    newArr.reverse()
    return newArr;
}

digitize(35231)