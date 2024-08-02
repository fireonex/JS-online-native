function toCamelCase(str) {
    if (str.length === 0) {
        return '';
    }

    function convertToCamelCase(arr) {
        let resultArr = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
            let el = arr[i];
            resultArr.push(el[0].toUpperCase() + el.slice(1));
        }
        return resultArr.join('');
    }

    let result = str;
    if (str.includes('-')) {
        result = convertToCamelCase(result.split('-'));
    }
    if (str.includes('_')) {
        result = convertToCamelCase(result.split('_'));
    }

    return result;
}

toCamelCase("the_stealth_warrior")   //"theStealthWarrior"
toCamelCase("The-Stealth-Warrior")   //"TheStealthWarrior"
//Дополните метод/функцию так, чтобы он преобразовывал слова,
// разделенные тире/подчеркиванием, в camel case. Первое слово
// в выходных данных должно быть написано заглавными буквами,
// только если исходное слово было написано заглавными буквами
// (известно как Upper Camel Case, также часто называемый Pascal case).
// Следующие слова должны всегда быть написаны заглавными буквами.


// Примеры
// "the-stealth-warrior"преобразуется в"theStealthWarrior"
//
// "The_Stealth_Warrior"преобразуется в"TheStealthWarrior"
//
// "The_Stealth-Warrior"преобразуется в"TheStealthWarrior"