/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {

    let maxLength = 0
    let start = 0
    const map = new Map()
    
    for (let i = 0; i < s.length; i++){
        const char = s[i]
        
        if (map.get(char) >= start){
            start = map.get(char) + 1
        }
                 
        map.set(char, i)
        
        maxLength = Math.max(maxLength, i - start + 1)
    }
    
    return maxLength
}