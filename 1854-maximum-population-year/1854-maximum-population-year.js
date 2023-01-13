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
    
    const sortedMap = Array.from([...map.entries()].sort((a, b) => b[1] - a[1]))
    
    const array = []
    
    for (let [ key, value ] of sortedMap) {
        if (value === sortedMap[0][1]) array.push(key)
    }
    
    console.log(array)
    return Math.min(...array)

};