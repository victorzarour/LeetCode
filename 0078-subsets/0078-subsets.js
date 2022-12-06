/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(elements) {
    if (!elements.length) return [[]]

    const exclude = subsets(elements.slice(1))
    const include = []

    for (let sub of exclude){
        include.push([elements[0], ...sub])
    }
    return [...exclude, ...include]
};