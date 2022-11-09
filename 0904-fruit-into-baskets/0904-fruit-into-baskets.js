/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = array => {
    
    let map = new Map()
    let max = 0
    let start = 0
    
    for (let end = 0; end < array.length; end++){
        
        let currElement = array[end]
        
        map.set(currElement, map.get(currElement) + 1 || 1)
        
        while(map.size > 2){
            
            let char = array[start]
            
            let charCount = map.get(char)
            
            if (charCount-1 === 0) map.delete(char)
            
            else map.set(char, charCount-1)
            
            start++
        }
        
        if (map.size >= 1) max = Math.max(max, end + 1 - start)
    }
    return max
};