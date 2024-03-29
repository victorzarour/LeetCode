/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0, res = 0
    
    while (i < chars.length) {
        let count = 1
        
        while (chars[i] === chars[i + count]) count++
        
        chars[res++] = chars[i]
        
        if (count > 1) String(count).split("").forEach(char => chars[res++] = char)
        
        i += count
    }
    console.log(chars)
    return res
};