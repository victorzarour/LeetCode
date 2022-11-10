/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let max = 0, start = 0, map = new Map()
    
    for (let end = 0; end < fruits.length; end++){
        map.set(fruits[end], map.get(fruits[end]) + 1 || 1)
        
        while (map.size > 2){
            if (map.get(fruits[start]) - 1 === 0) map.delete(fruits[start])
            else map.set(fruits[start], map.get(fruits[start]) - 1)
            
            start++
        }
        
        max =  Math.max(max, end + 1 - start)
    }
    return max    
};