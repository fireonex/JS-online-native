function factorial(n) {
    let x = 1
    if (n === 0 || n === 1) {
        console.log(1)
    } else {
        for (let i = 2; i <= n; i++) {
            x = x * i
        }
        console.log(x)
    }
}

//factorial(0) //1
//factorial(1) //1
factorial(6) //720