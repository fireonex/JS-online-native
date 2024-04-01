//статические св-ва
// let fruit = {
//     color: 'red',
//     taste: 'good'
// }
// console.log(fruit['color'])
// console.log(fruit['taste'])

//динамические св-ва - зависят от условий или вычисляются в процессе выполнения кода
// (для определения используются квадратные скобки)
// const obj = {
//     [key] : value
// }
// function create(key, value) {
//     let newObj = {}
//     newObj[key] = value
//
//     return newObj
// }
//
// console.log(create('car', 'Audi'))
//---------------------------------------------
// function create2(key, value) {
//     return {
//         [key] : value,
//     };
// }
//
// console.log(create2('plant', 'rose'));

//динамические св-ва:
//1)использование переменной

// let propertyName = 'age'
//
// const person = {
//     name: 'John', //статическое св-во
//     [propertyName] : 30 //динамическое св-во
// };
//
// console.log(person)

//2) конкатинация строк

// let prefix = 'user'
// const user = {
//     [prefix + 'id'] : '123-bcgjsl',
//     [prefix + 'name'] : 'Alice'
// }
// console.log(user)

//3) арифметические операции
// let index = 3;
//
// const obj = {
//     [index + 1] : 'four',
// }
// console.log(obj)

//-------------------------------------

// const obj = {
//     ['age' + 2] : 32,
//     [2 + 2] : '4'
// }
// console.log(obj)

//------------------------------------

//операции с ключами

// function createObj (key, value) {
//     return {
//         [key.toUpperCase()]:value
//     }
// }
// console.log(createObj('car', 'bmw'))

//-----------------------------------------
// const STATUS_BUSY = 'busy'
// const STATUS_READY = 'ready'
//
// const STATUS_LABELS = {
//     [STATUS_BUSY] : 'ожидает',
//     [STATUS_READY] : 'готово'
// }
//
// const drivers = [
//     {name: 'Паша', status: 'ready'},
//     {name: 'Иван', status: 'busy'},
//     {name: 'Саша', status: 'ready'},
// ]
//
// const driversStatuses = drivers.map((driver) => {
//     const {status} = driver;
//
//     console.log('status: ', status)
//     console.log(STATUS_LABELS[status])
//
//     return STATUS_LABELS[status]
// })

//------------------------------------------------------
//Object.keys() - возвращает массив ключей

// const user = {
//     name: 'John',
//     age: 32,
//     favoriteColor: 'black',
//     country: {
//         city: 'Moscow',
//         address: 'New Address'
//     }
// }
//
// let keys = Object.keys(user)
//
// console.log(keys);

//Object.values() - возвращает массив значений

// const user = {
//     name: 'John',
//     age: 32,
//     favoriteColor: 'black',
//     country: {
//         city: 'Moscow',
//         address: 'New Address'
//     }
// }
//
// let res = Object.values(user)
//
// console.log(res);

//Object.entries() - возвращает массив пар ключ-значение

// const user = {
//     name: 'John',
//     age: 32,
//     favoriteColor: 'black',
//     country: {
//         city: 'Moscow',
//         address: 'New Address'
//     }
// }
//
// let res = Object.entries(user)
//
// console.log(res);

// new Map - это коллекция ключ-значение, как и Object
//ключи могут быть лбого типа

//new Map - создаем нашу коллекцию

// const mapCollection = new Map();
// // //set(key, value) - записывает по ключу значение value
// //
// mapCollection.set(1, 'str1')
// mapCollection.set('1', 'string')
// mapCollection.set(true, 'boolean')
//
// console.log('mapCollection: ', mapCollection)

// let map = new Map(['1', 'any'], ['2', 'number']);
//
// console.log(map)
//get(key)

// console.log(mapCollection.get(1))

//has(key) - проверяем есть ли ключ в коллекции
//console.log(mapCollection.has('1'))

//delete(key) - удаляем элемент по конкретному ключу

//clear() - очищает коллекцию


// let numbers = [1, 2, 3, 4, 5, 5, 6, 6, 6]
//
// let unique = new Set(numbers)
//
// let uniqueArr = [...unique]
//
// console.log(uniqueArr)

