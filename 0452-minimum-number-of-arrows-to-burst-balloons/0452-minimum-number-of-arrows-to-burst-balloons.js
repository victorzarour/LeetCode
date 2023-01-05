/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    const sorted = points.sort((a, b) => a[1] - b[1])
    let arrows = 0, prev = -Infinity
    
    for (let [ start, end ] of points) {
        if (prev < start) {
            arrows++
            prev = end
        }
    }
    return arrows
};