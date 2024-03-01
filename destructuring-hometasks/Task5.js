const students = [
    { name: 'Alex', grade: 'A' },
    { name: 'Emma', grade: 'B' },
    { name: 'Chris', grade: 'C' },
];

const [{name: student1}, , {name: student3}] = students

console.log(student1);  // 'Alex'
console.log(student3);  // 'Chris'