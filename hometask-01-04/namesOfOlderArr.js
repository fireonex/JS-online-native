const users = {
    1: { name: 'Alice', age: 30 },
    2: { name: 'Bob', age: 25 },
    3: { name: 'Charlie', age: 35 },
};


let usersOver25 = Object.values(users).filter(user => user.age > 25).map(user => user.name)


console.log(usersOver25); // Выведет: ['Alice', 'Charlie']