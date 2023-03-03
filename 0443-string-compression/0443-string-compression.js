/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0, res = 0
    
    while (i < chars.length) {
        let count = 1
        
        while (chars[i + count] === chars[i]) count++
        chars[res++] = chars[i]
        
        if (count > 1) {
            for (let char of String(count).split("")) {
                chars[res++] = char    
            }
        }
        i += count
    }
    return res
};