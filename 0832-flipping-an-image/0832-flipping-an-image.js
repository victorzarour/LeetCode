/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (let row of image) {
        for (let start = 0, end = row.length - 1; start <= end; start++) {
            if (start === end) {
                row[start] = row[start] === 0 ? 1 : 0
            } else {
                [row[start], row[end]] = [row[end], row[start]]
                row[start] = row[start] === 0 ? 1 : 0
                row[end] = row[end] === 0 ? 1 : 0           
            }
            end--
        }
        // for (let i = 0; i < row.length; i++) {
        //     if (row[i] === 0) row[i] = 1
        //     else if (row[i] === 1) row[i] = 0
        // }
    }
    return image
};