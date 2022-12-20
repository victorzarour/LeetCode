/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const queue = [0]
    const set = new Set()
    set.add(0)  

    while (queue.length){
        const current = queue.shift()
        set.add(current)

        for (let key of rooms[current]){
            if (!set.has(key)) queue.push(key)
        }        
    }

    return set.size === rooms.length    
};