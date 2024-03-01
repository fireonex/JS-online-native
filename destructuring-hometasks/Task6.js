//Установите значение по умолчанию для свойства age которого нет в объекте person
//и переименовать переменные, чтобы достать значение с свойства firstName


const person = { firstName: 'Max', lastName: 'Johnson' };

const {firstName: oneName, lastName: twoName, age = 25} = person

const firstName = 'first Name: Nina';
const lastName = 'last Name: Ivanov';

console.log(oneName); // 'Max'
console.log(twoName); // 'Johnson'
console.log(age); // 25 (значение по умолчанию)