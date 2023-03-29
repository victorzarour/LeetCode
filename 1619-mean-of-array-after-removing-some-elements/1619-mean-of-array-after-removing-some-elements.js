/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {

    // let five = arr.length / 20
    // arr = arr.sort((a, b) => a - b).slice(five + 1, arr.length - five)
    // return arr.reduce((a, b) => a + b) / arr.length
    
    arr.sort((a, b) => a - b)

    let fpl = arr.length /20
    let sum = 0;

    for (let i = fpl; i < arr.length - fpl; i++) sum += arr[i]

    return sum / (arr.length - (fpl * 2))
};