/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    const sorted = points.sort((a,b) => a[1] - b[1])
    let minArrows = 0, prev
    
    for (let [ start, end ] of points) {
        if (!prev || prev < start) {
            minArrows++
            prev = end
        } else prev = Math.min(prev, end)
    }
    
    return minArrows
};