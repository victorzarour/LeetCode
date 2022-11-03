/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    let map = new Map()
    
    for (num of arr){
        if (!map.get(num)) map.set(num, 1)
        else map.set(num, map.get(num) + 1)
    }

    let array = []
    
    for (num of map.values()){
        array.push(num)
    }
    
    let sorted = array.sort()
    
    for (let i = 0; i < sorted.length; i++){
        if (sorted[i] === sorted[i + 1]) return false
    }
    
    return true
};