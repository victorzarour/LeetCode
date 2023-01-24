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

//     const mapSort = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
   
//     const array = []
    
//     for (let [ key, value ] of mapSort) {
//         array.push(key)
//     }
     
//     return array.slice(0, k)
    
    
        return [...map.keys()]
        .sort((a,b) => map.get(a) === map.get(b) ? a - b : map.get(a) - map.get(b))
        .slice(0, k);
};
