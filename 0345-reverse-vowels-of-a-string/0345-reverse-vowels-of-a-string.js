/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
    let first = 0
    let last = s.length - 1
    const split = s.split("")
    
    while (first <= last){
        if (!set.has(split[first])) first++
        else if (!set.has(split[last])) last--
        else if (set.has(split[first]) && set.has(split[last])){
            [split[first], split[last]] = [split[last], split[first]]
            first++
            last--
        } 
    }
    
    return split.join("")
};