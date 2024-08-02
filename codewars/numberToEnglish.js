const numberToEnglish = n => {
    if (Number.isInteger(n) && n <= 99999 && n >= 0) {
        let resultArr = []
        let length = n.length
        switch (length) {
            case 5:
                console.log("Monday");
                break;
            case 4:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 2:
                console.log("Thursday");
                break;
            case 1:

                break;
        }
        //todo: доделать
    } else {
        return ''
    }
}

numberToEnglish(3892)   //'three thousand eight hundred ninety two'

//Напишите метод, который принимает число и возвращает строку этого
// числа на английском языке.
//
// Ваш метод должен иметь возможность обрабатывать любые числа от 0 до 99999.
// Если указанное число выходит за пределы этого диапазона или не является
// целым числом, метод должен возвращать пустую строку
