function toTime(seconds) {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor(seconds % 3600 / 60)
    return `${hours} hour(s) and ${minutes} minute(s)`
}
toTime(3500) //'0 hour(s) and 58 minute(s)'
// Создайте функцию, которая принимает целочисленный
// аргумент секунд и преобразует значение в строку,
// описывающую, сколько часов и минут составляют это количество секунд.
//
// Все оставшиеся секунды игнорируются.
//
// Примечание:
// Вывод строки должен быть в определенном формате — «X часов и X минут».
//
// Например:
//
// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 323500 --> "89 hour(s) and 51 minute(s)"