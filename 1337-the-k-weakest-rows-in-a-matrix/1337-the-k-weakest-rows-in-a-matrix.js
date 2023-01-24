/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const map = new Map()
    
    for (let row = 0; row < mat.length; row++) {
        map.set(row, 0)
        for (let person of mat[row]) {
            if (person === 1) map.set(row, map.get(row) + 1 || 1)
        }
    }
    console.log(map)
//     const mapSort = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
   
//     const array = []
    
//     for (let [ key, value ] of mapSort) {
//         array.push(key)
//     }
    
//     const index = mat.length % 2 === 1 ? Math.floor(mat.length/2 + 1) : Math.floor(mat.length/2)
    
//     return array.slice(0, index)
    
        return [...map.keys()]
        .sort((a,b) => map.get(a) !== map.get(b) ? map.get(a) - map.get(b) : a - b)
        .slice(0, k);
};


// var kWeakestRows = function(mat, k) {
//     const map = new Map();
//     for(const [i, m] of mat.entries()) {
//         map.set(i, m.reduce((a, b) => a + b));
//     }
//     console.log(map)
//     return [...map.keys()]
//         .sort((a,b) => map.get(a) !== map.get(b) ? map.get(a) - map.get(b) : a - b)
//         .slice(0, k);
// };