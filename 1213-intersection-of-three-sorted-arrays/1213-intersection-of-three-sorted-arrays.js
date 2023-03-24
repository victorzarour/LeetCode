/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
//     const map = new Map(), array = []
    
//     for (let num of arr1) {
//         map.set(num, 1)
//     }
//     for (let num of arr2) {
//         map.set(num, map.get(num) + 1 || 1)
//     }
//     for (let num of arr3) {
//         map.set(num, map.get(num) + 1 || 1)
//     }

//     for (let [ key, value ] of map) {
//         if (value === 3) array.push(key)
//     }
//     return array 
    const array = []
    let first = 0, second = 0, third = 0
    
    while (first < arr1.length && second < arr2.length && third < arr3.length) {
        if (arr1[first] === arr2[second] && arr2[second] === arr3[third]) {
            array.push(arr1[first])
            first++
            second++
            third++
        } else {
            if (arr1[first] < arr2[second]) {
                first++;
            } else if (arr2[second] < arr3[third]) {
                second++;
            } else {
                third++;
            }
        }
    }
    return array
};