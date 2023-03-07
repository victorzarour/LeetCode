/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    const minTime = Math.min(...time)
    let low = 1, high = totalTrips * minTime

    while (low < high) {
        const mid = Math.floor((low + high) / 2)
        const outcome = time.reduce((acc, cur) => acc + Math.floor(mid / cur), 0)
        if (outcome >= totalTrips)  high = mid
        else low = mid + 1
    }    
    return high
};