/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
    
    let max = 0
    let start = 0
    const map = new Map()
    
    for (let end = 0; end < s.length; end ++){
        const char = s[end]
        
        if (map.get(char) >= start){
        start = map.get(char) + 1
    }
         
        map.set(char, end)
         
        max = Math.max(max, end + 1 - start)
    }

    
    
    return max
}