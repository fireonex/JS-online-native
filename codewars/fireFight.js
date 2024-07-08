function fireFight(s) {
    let sArr = s.split(' ').map(el => el === 'Fire' ? '~~' : el)
    return sArr.join(' ')
}

fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast")
//"Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"

//Вам будет предоставлена строка, в которой перечислены многие предметы,
// связанные с лодкой. Если какой-либо из этих предметов — «Огонь»,
// вы должны приступить к действиям. Измените любой экземпляр «Огня» на «~~».
// Затем верните строку.