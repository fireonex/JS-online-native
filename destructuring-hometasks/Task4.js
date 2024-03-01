const car = { brand: 'Toyota', model: 'Camry' };

const {brand, model, year = 2022} = car;

console.log(brand);  // 'Toyota'
console.log(model);  // 'Camry'
console.log(year);   // 2022 (значение по умолчанию)