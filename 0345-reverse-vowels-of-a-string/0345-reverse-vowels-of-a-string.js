/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowelss = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    const vowels = new Set(vowelss)
    let first = 0
    let last = s.length - 1
    const split = s.split("")
    
    while (first <= last){
        if (!vowels.has(split[first])) first++
        else if (!vowels.has(split[last])) last--
        else if (vowels.has(split[first]) && vowels.has(split[last])){
            [split[first], split[last]] = [split[last], split[first]]
            first++
            last--
        } 
    }
    
    return split.join("")
};