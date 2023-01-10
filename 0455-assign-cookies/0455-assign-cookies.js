/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// var findContentChildren = function(g, s) {
//     let count = 0
//     g = g.sort((a, b) => a - b)
//     s = s.sort((a, b) => a - b)
    
//     for (let i = 0; i < g.length; i++) {
//         for (let j = 0; j < s.length; j++) {
//             if (s[j] >= g[i]) {
//                 count++
//                 s.splice(j, 1)
//                 break
//             }
//         }
//     }
//     return count
// };

const findContentChildren = (g, s) => {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let gi = 0
    for (let si = 0; gi < g.length && si < s.length; ++si)
        if (s[si] >= g[gi]) ++gi;
    return gi;
};

