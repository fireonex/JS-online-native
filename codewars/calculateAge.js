function  calculateAge(firstYear, lastYear) {

    if (firstYear === lastYear) {
        return "You were born this very year!"
    }

    if (firstYear > lastYear && firstYear - lastYear !== 1) {
        return `You will be born in ${firstYear - lastYear} years.`
    }
    if (firstYear - lastYear === 1) {
        return "You will be born in 1 year."
    }

    if (firstYear < lastYear && lastYear - firstYear !== 1) {
        return `You are ${lastYear - firstYear} years old.`
    }
    if (lastYear - firstYear === 1) {
        return "You are 1 year old."
    }

}

//Ваша задача — написать функцию, принимающую два параметра: год рождения и год,
// по отношению к которому отсчитываются годы.

//Provide output in this format: For dates in the future: "You are ... year(s) old."
// For dates in the past: "You will be born in ... year(s)."
// If the year of birth equals the year requested return: "You were born this very year!"