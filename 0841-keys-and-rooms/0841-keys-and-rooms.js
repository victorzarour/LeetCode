/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const queue = [0]
    const set = new Set()

    while (queue.length){
        const current = queue.shift()
        set.add(current)
       
        for (let key of rooms[current]){
            if (!set.has(key)) queue.push(key)
        }        
    }
    console.log(set)

    return set.size === rooms.length    
};