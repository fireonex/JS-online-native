function meeting(s) {
    let firstArr = s.split(';')
    let secondArr = firstArr.map(element => element.toUpperCase().replace(/:/g, ' '));
    let swappedArray = secondArr.map(fullName => {
        let [firstName, lastName] = fullName.split(' ');
        return `${lastName} ${firstName}`;
    });
    let sortArr = swappedArray.sort()
    let thirdArr = sortArr.map(element => element.replace(' ', ', '));
    return thirdArr.map(element => `(${element})`).join('')
}

meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")
//"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

//сделать программу, которая делает эту строку заглавной и отсортирует его в алфавитном порядке по фамилии.
// Если фамилии совпадают, отсортируйте их по имени. Фамилия и имя гостя указываются в круглых скобках, разделенных запятой.