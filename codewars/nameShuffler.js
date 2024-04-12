function nameShuffler(str) {
    let newArr = str.split(' ').reverse();
    return ('' + newArr[0] + ' ' + newArr[1] + '')
}

nameShuffler('john McClane') //'McClane john'