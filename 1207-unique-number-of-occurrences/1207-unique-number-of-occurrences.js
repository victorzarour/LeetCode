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
    
    console.log("output", output)
    console.log("set", new Set(output))
    
    return output.length == new Set(output).size
    
//     let sorted = Object.values(object).sort()
    
//     for (let i = 0; i < sorted.length; i++){
//         if (sorted[i] === sorted[i + 1]) return false
//     }
    
//     return true
    

};