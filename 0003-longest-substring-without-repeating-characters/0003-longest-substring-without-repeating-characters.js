/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {

    let max = 0
    let start = 0
    
    const map = new Map()
    
    for (let i = 0; i < s.length; i++){
        const char = s[i]
        
        if (map.get(char) >= start){
            start = map.get(char) + 1
        }
        
        map.set(char, i)
        
        max = Math.max(max, i + 1 - start)       
        
    }
    
    
    return max
}