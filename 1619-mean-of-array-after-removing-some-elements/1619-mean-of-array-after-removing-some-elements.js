/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {

    // let five = arr.length / 20
    // arr = arr.sort((a, b) => a - b).slice(five + 1, arr.length - five)
    // return arr.reduce((a, b) => a + b) / arr.length
    
    let trim = arr.length / 20, sum = 0
    arr.sort((a, b) => a - b)

    for (let i = trim; i < arr.length - trim; i++) sum += arr[i]

    return sum / (arr.length - (trim * 2))
};