function openOrSenior(data){
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let member = data[i]
        if (member[0] > 55 && member[1] > 7) {
            result.push("Senior")
        } else {
            result.push("Open")
        }
    }
    return result
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])  //['Open', 'Senior', 'Open', 'Senior']

//Чтобы стать senior, член должен быть не моложе 55 лет и иметь
// гандикап больше 7. В этом крокетном клубе гандикапы варьируются
// от -2 до +26; чем лучше игрок, тем ниже гандикап.

//input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]