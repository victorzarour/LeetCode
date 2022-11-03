/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const obj = {};
    
    for(let el of arr) {
        obj[el] = obj[el] ? ++obj[el] : 1;
    }
    const output = Object.values(obj);
    
    return output.length == new Set(output).size
};