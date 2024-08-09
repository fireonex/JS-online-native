function toNato(words) {
    const data = [ "Alfa", "November",
        "Bravo", "Oscar",
        "Charlie", "Papa",
        "Delta", "Quebec",
        "Echo", "Romeo",
        "Foxtrot", "Sierra",
        "Golf", "Tango",
        "Hotel", "Uniform",
        "India", "Victor",
        "Juliett", "Whiskey",
        "Kilo", "Xray",
        "Lima", "Yankee",
        "Mike", "Zulu"];
    let result = [];
    let wordsArr = words.split('');
    for (let i = 0; i<wordsArr.length; i++) {
        let el = wordsArr[i]
        if (/^[,.!?]$/.test(el)) {
            result.push(el)
        } else if (el !== ' ' ){
            for (let j = 0; j<el.length; j++) {
                data.forEach(word => {
                    if (word.charAt(0) === el[j].toUpperCase()) {
                        result.push(word);
                    }
                })
            }
        }
    }
    return result.join(' ')
}

toNato('If you can read')
    //'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta'

// you can access the preloaded NATO dictionary
//     NATO['A'] === 'Alfa', etc.

// Alfa	    November
// Bravo	Oscar
// Charlie	Papa
// Delta	Quebec
// Echo	    Romeo
// Foxtrot	Sierra
// Golf	    Tango
// Hotel	Uniform
// India	Victor
// Juliett	Whiskey
// Kilo	    Xray
// Lima	    Yankee
// Mike	    Zulu