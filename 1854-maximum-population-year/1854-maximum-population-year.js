/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    
    const map = new Map()
    
    for (let [ start, end ] of logs) {
        for (let i = start; i < end; i++){
            map.set(i, map.get(i) + 1 || 1)
        }
    }
        
    const array = []
    
    for (let [ key, value ] of map) {
        if (value === Math.max(...map.values())) array.push(key)
    }
    
    return Math.min(...array)

};