/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let min = 1, max = Math.max(...piles)
    
    while (min < max) {
        let mid = Math.floor((min + max) / 2)
        let count = 0
        
        for (let pile of piles) {
            count += Math.ceil(pile / mid)
        }
        
        if (count <= h) max = mid
        else min = mid + 1
    }
    return min
}
