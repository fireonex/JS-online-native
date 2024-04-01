var capitals = function (word) {
    let WordArr = Array.from(word);

    let result = []

    for (let i = 0; i < WordArr.length; i++) {

        if (WordArr[i].toUpperCase() === WordArr[i]) {
            result.push(i)
        }
    }
    return result;
};


capitals('CodEWaRs') //[0,3,4,6]