function twoSort(s) {
    s.sort()
    let res = s[0]
    let result = Array.from(res)
    return result.join("***")
    //console.log(result2)
}


twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])