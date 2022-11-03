/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
   
    let object = {}
    
    for (let num of arr){
        object[num] = object[num] ? ++object[num] : 1
    }
    
    const output = Object.values(object);
    
    return output.length == new Set(output).size
    

};