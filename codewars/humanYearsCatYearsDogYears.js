var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;

    for (let i = 1; i <= humanYears; i++) {

        if (i === 1) {
            catYears +=15;
            dogYears +=15;
        }
        if (i === 2) {
            catYears += 9;
            dogYears += 9;
        }
        if (i >= 3) {
            catYears += 4;
            dogYears += 5;
        }
    }

    return [humanYears, catYears, dogYears]
}

humanYearsCatYearsDogYears(2) //[2,24,24]

//humanYears>= 1
// humanYears это только целые числа

// Кошачьи годы
// 15кошачьи годы за первый год
// +9кошачьи годы на второй год
// +4кошачьи годы за каждый год после этого

// Собачьи годы
// 15собачьи годы за первый год
// +9собачьи годы на второй год
// +5собачьи годы за каждый последующий год

//Верните их возраст сейчас как [ humanYears, catYears, dogYears]
