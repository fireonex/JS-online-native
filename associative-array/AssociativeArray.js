// const mentors = [
//     { 'id': 'id100', 'title': "Dymych", salary: 10 }, //0
//     { 'id': 'id20222', 'title': "Viktor", salary: 100 }, //1
//     { 'id': 'id323242', 'title': "Valera", salary: 100 }, //2
//     { 'id': 'id489829898989', 'title': "Artem", "my salary": 100 } //3
// ];
//
// const artemId = 'id489829898989';
// const mentor1 = mentors.find(m => m.id === artemId);
//
// const mentor2 = mentors[3];
//
// //console.log(Object.keys(mentor1))
// mentor2["my salary"] = 50;
//
// console.log(mentor1.id)
// console.log(mentor1["id"])
//
// const propertyName = 'title';
// const value = 'Alex';
//
// mentor2[propertyName] = value
// console.log(mentor2)

// const students = [
//     {id: 'id100', title: "Andrew"}, //0
//     {id: 'id2', title: "Anna"}, //1
//     {id: 'id4', title: "Sasha"}, //2
//     //...
//     {id: 'id100000', title: "Marina"},
//     {
//         id: 'id100000',
//         title: "Marina",
//         technologies: [
//             {id: 1, title: 'css'},
//             {id: 2, title: 'html'},
//             {id: 3, title: 'js'},
//             {id: 4, title: 'reac'}
//         ]
//     }
// ];
//
// const marina = students.find(p => p.id === 'id100000')
// console.log(marina)
// const tech = marina.technologies.find(t => t.id === 4)
// tech.title = 'react'
//
//
//
// const studentsObj = {
//     'id100': {id: 'id100', title: "Andrew"},
//     'id2': {id: 'id2', title: "Anna"},
//     'id4': {id: 'id4', title: "Sasha"},
//     'id100000': {
//         id: 'id100000',
//         title: "Marina",
//         technologies: {
//             1 : {id: 1, title: 'css'},
//             2 : {id: 2, title: 'html'},
//             3 : {id: 3, title: 'js'},
//             4 : {id: 4, title: 'reac'}
//         }
//     }
// }
//
// const marina2 = studentsObj['id100000'].title += ' Sun'
// console.log(marina2)
//
// marina2.technologies[4]['title'] = 'react'
// console.log(marina2)
//let marina2 = studentsObj['id100000']
// marina2.title += ' Sun'
//console.log(marina2)


const obj1 = {
    name: 'Ivan',
    age: 30,
    surname: 'Ivanov',
}

const obj2 = {
    country: 'Russia',
    city: 'Moscow',
    street: 'Great Street'
}

const humans = {
    person1: {'name': 'Ivan', 'age': 30, 'surname': 'Ivanov'},
    person2: {'name': 'Sergey', 'age': 25, 'surname': 'Sergeev'},
    person3: {'name': 'Sam', 'age': 55, 'surname': 'Mitchel'}
}

console.log(humans.person2['age'])
//console.log(obj2["street"])

