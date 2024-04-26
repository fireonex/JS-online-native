function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // let result = []
    // for (let i = 0; i < birds.length; i++) {
    //     if (birds[i] !== "African"
    //         && birds[i] !== "Roman Tufted"
    //         && birds[i] !== "Toulouse"
    //         && birds[i] !== "Pilgrim"
    //         && birds[i] !== "Steinbacher") {
    //         result.push(birds[i])
    //     }
    // }
    //
    // return result

    return birds.filter(bird => !geese.includes(bird));

}

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
//["Mallard", "Hook Bill", "Crested", "Blue Swedish"]


// return an array containing all of the strings in the input array except those that match strings in geese