/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const map = new Map()
    let count = 0
    
    for (let task of tasks) {
        map.set(task, map.get(task) + 1 || 1)
    }
    
    for (let [ key, value ] of map) {
        if (value < 2) return -1
        else if (value === 2) {
            count++
            map.delete(key)
        }
        else if (value % 3 == 0) {
            count += (value / 3)
            map.delete(key)
        }
        else if (value % 3 == 1) {
            let number = (value - 1) / 3
            count += ((number - 1) + 2)
        }
        else if (value % 3 == 2) {
            count += (((value - 2) / 3) + 1)
        }
        
    }
    return count
};