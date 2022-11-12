/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let unitCount = 0
    let boxCount = truckSize    
    
    const sortedMap = boxTypes.sort((a, b) => b[1] - a[1]);

    for (let box of sortedMap){
        if (boxCount - box[0] >= 0){
            unitCount += (box[0] * box[1])
            boxCount -= box[0]
        }
        else {
            while (boxCount > 0){
            unitCount += box[1]
            boxCount -= 1
            }
        }
        
    }
    return unitCount
};