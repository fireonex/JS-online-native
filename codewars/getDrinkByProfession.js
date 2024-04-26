function getDrinkByProfession(param) {
    let lowerParam = param.toLowerCase()
    switch (lowerParam) {
        case "jabroni":
            return "Patron Tequila"
        case "school counselor":
            return "Anything with Alcohol"
        case "programmer":
            return "Hipster Craft Beer"
        case "bike gang member":
            return "Moonshine"
        case "politician":
            return "Your tax dollars"
        case "rapper":
            return "Cristal"
        default:
            return "Beer"
    }
}

getDrinkByProfession("jabrOni") //"Patron Tequila"

// Input	            Output
// "Jabroni"	        "Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	        "Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	        "Your tax dollars"
// "Rapper"	            "Cristal"
// anything else	    "Beer"