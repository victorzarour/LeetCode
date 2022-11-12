/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let unitCount = 0
    
    const sortedMap = boxTypes.sort((a, b) => b[1] - a[1]);

    for (let box of sortedMap){
        if (truckSize - box[0] >= 0){
            unitCount += (box[0] * box[1])
            truckSize -= box[0]
        }
        else {
            while (truckSize > 0){
            unitCount += box[1]
            truckSize -= 1
            }
        }
    }
    return unitCount
};