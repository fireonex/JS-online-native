const person = { name: 'Alice', age: 30 };

// Деструктуризация в параметрах функции
function printPersonDetails({name, age}) {
    console.log(`Name: ${name}, Age: ${age}`)
}

printPersonDetails(person);  // Вывод: Name: Alice, Age: 30