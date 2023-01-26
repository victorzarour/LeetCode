/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
    for (let row of image) {
        for (let start = 0, end = row.length - 1; start < end; start++) {
            [row[start], row[end]] = [row[end], row[start]]
            end--
        }
        for (let i = 0; i < row.length; i++) {
            if (row[i] === 0) row[i] = 1
            else if (row[i] === 1) row[i] = 0
        }
    }
    return image
};