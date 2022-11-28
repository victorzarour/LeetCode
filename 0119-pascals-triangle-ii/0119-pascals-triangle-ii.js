/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let array = []
    
    for (let i = 0; i <= rowIndex; i++){
        const row = new Array(i + 1)
        row[0] = 1
        row[row.length - 1] = 1
        
        for (let j = 1; j < row.length - 1; j++){
            const rowAbove = array[i - 1]
            row[j] = rowAbove[j - 1] + rowAbove[j]   
        }
        array[i] = row
    }
    return array[rowIndex]    
};