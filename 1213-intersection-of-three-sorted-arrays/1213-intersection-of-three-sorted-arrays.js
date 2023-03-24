/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    const map = new Map(), array = []
    
    for (let num of arr1) {
        map.set(num, 1)
    }
    for (let num of arr2) {
        map.set(num, map.get(num) + 1 || 1)
    }
    for (let num of arr3) {
        map.set(num, map.get(num) + 1 || 1)
    }

    for (let [ key, value ] of map) {
        if (value === 3) array.push(key)
    }
    
    
    return array 
};