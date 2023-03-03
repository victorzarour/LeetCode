/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!haystack.includes(needle)) return -1

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let index = i, ind = 0, indie = i
            while (haystack[indie] === needle[ind]){
                indie++;
                ind++;
                if (ind === needle.length) return index
            }
        }
    }
};