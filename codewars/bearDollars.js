function bearDollars(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let firstElement = arr[i][0];
        let secondElement = arr[i][1].toLowerCase();
        if (secondElement === 'close friend') {
            result += firstElement * 25
        }
        else if (secondElement === 'friend') {
            result += firstElement * 50
        }
        else if (secondElement === 'acquaintance') {
            result += firstElement * 100
        } else {
            result += firstElement * 125
        }
    }
    return result
}

bearDollars([[10, 'Close Friend'],
    [3, 'Acquaintance'],
    [7, 'Lead from web'],
    [6, 'Friend'],
    [2, 'It came from Facebook']])   //1975

//'Close Friend' - $25 per hour, 'Friend' - $50, 'Acquaintance' - $100, other - 125$

//[[10, 'Close Friend'], [3, 'Acquaintance'], [7, 'Lead from web'], [6, 'Friend'],
// [2, 'From advertisements']]
// В этом примере он будет взимать плату за 10 часов по 25 долларов, за 3 часа по 100 долларов,
// за 7 часов по 125 долларов, за 6 часов по 50 долларов и за 2 часа по 125 долларов, что в
// общей сложности составит 1975 долларов.

//let array = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
//
// for (let i = 0; i < array.length; i++) {
//     let firstElement = array[i][0];
//     let secondElement = array[i][1];
//
//     console.log('First element:', firstElement);
//     console.log('Second element:', secondElement);
// }