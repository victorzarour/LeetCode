/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let i = 0
    while (i < arr.length) {
        let found = -1
        for (let j = 0; j < pieces.length; j++) {
            if (pieces[j][0] === arr[i]) {
                found = j
                break;
            }
        }
        if (found === -1) return false
        let target = pieces[found]
        for (let x of target) {
            if (x !== arr[i]) return false
            i++
        }
    }
    return true
};