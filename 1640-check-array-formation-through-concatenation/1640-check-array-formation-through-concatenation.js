/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    const map = new Map()
    for (let piece of pieces) {
        map.set(piece[0], piece)
    }
    console.log(map)
    let i = 0
    while (i < arr.length) {
        if (!map.get(arr[i])) return false
        let target = map.get(arr[i])
        for (let x of target) {
            if (x !== arr[i]) return false
            i++
        }
    }
    return true
};