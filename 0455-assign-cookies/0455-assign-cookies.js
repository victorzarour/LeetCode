/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let count = 0
    g = g.sort((a, b) => a-b)
    s = s.sort((a, b) => a-b)
    
    console.log(g)
    console.log(s)
    
    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] >= g[i]) {
                count++
                s.splice(j, 1)
                break
            }
        }
    }
    return count
};