const products = [
    { id: 1, name: 'Телефон', price: 500 },
    { id: 2, name: 'Наушники', price: 100 },
    { id: 3, name: 'Чехол для телефона', price: 20 },
    { id: 4, name: 'Зарядное устройство', price: 30 }
];

const totalCost = products.reduce((acc, element) => acc + element.price, 0);


console.log(totalCost); // Выведет: 650

//1) У вас есть массив объектов, представляющих информацию о продуктах в магазине.
// Ваша задача - найти суммарную стоимость всех продуктов в магазине.