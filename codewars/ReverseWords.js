function reverseWords(str) {
    let result = str.split('').reverse().join('').split(' ');
    return result.reverse().join(' ')
}

reverseWords('double  spaced  words') //'elbuod  decaps  sdrow'