function isIsogram(str){
    let newArr = Array.from(str.toLowerCase())
    return new Set(newArr).size === newArr.length;
}

isIsogram("moOse") //false

//isIsogram "Dermatoglyphics" = true
//isIsogram "moose" = false
//isIsogram "aba" = false
