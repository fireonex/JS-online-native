function sumCubes(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i * i * i
    }
    return result
}

//2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
sumCubes(3) //36