/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!haystack.includes(needle)) return -1

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let firstOccurrence = i, hayStackI = i, needleI = 0
            while (haystack[hayStackI] === needle[needleI]){
                hayStackI++;
                needleI++;
                if (needleI === needle.length) return firstOccurrence
            }
        }
    }
};