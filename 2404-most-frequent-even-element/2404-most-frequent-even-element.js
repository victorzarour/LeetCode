/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    
    const map = new Map()
    let max = 0
    
    for (let num of nums){
        
        if (num % 2 == 0 && map.has(num)) map.set(num, map.get(num) + 1)
        
        else if (num % 2 == 0) map.set(num, 1)
        
        if (map.get(num) > max) max = map.get(num)
    }
    
    let smallestMaxKey = Infinity
	
    for (let [num, count] of map) {
        if (count === max && num < smallestMaxKey) smallestMaxKey = num
    }

    return smallestMaxKey === Infinity ? -1 : smallestMaxKey
    
};