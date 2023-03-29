/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    let trim = arr.length / 20, sum = 0
    arr.sort((a, b) => a - b)

    for (let i = trim; i < arr.length - trim; i++) sum += arr[i]

    return sum / (arr.length - (trim * 2))
};