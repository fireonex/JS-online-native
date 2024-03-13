function isPrime(n) {
    if (n > 1) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i) {
                return false
            }
        }
    } else {
        return false
    }
    return true
}

isPrime(0)                          // false
//isPrime(1)                          // false
//isPrime(17)                         // true
//isPrime(10000000000000)             // false