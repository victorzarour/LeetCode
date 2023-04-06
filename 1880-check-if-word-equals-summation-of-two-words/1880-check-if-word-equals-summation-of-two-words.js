/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    const obj = {
        'a': '0',
        'b': '1',
        'c': '2',
        'd': '3',
        'e': '4',
        'f': '5',
        'g': '6',
        'h': '7',
        'i': '8',
        'j': '9',
        'k': '10',
        'l': '11',
        'm': '12',
        'n': '13',
        'o': '14',
        'p': '15',
        'q': '16',
        'r': '17',
        's': '18',
        't': '19',
        'u': '20',
        'v': '21',
        'x': '22',
        'y': '23',
        'z': '24'
    }
    let first = "", second = "", target = ""
    for(let char of firstWord){
        first += obj[char]
    }
    for(let char of secondWord){
        second += obj[char]
    }
    for(let char of targetWord){
        target += obj[char]
    }
    return parseInt(first) + parseInt(second) === parseInt(target)
    
};