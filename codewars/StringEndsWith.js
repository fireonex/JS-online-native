function solution(str, ending) {
    let firstArr = Array.from(str)
    let secondArr = Array.from(ending)
    for (let i = 0; i < secondArr.length; i++) {
        if (firstArr[firstArr.length - 1 - i] !== secondArr[secondArr.length - 1 - i]) {
            console.log(false)
        }
    }
    console.log(true)
}

solution('abcde', 'cde') //true
solution('abcde', 'abc') //false