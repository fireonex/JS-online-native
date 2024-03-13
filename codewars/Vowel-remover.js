function shortcut(string) {
    let stringToArr = Array.from(string);
    let filteredArr = stringToArr.filter(letter => letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u')
    return (filteredArr.join(''))
}

shortcut("hello")
