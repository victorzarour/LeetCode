/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {   
    let small, long
    if (str1.length > str2.length){
        small = str2
        long = str1
    } else {
        small = str1
        long = str2
    }
    
    for (let i = small.length; i >= 0; i--) {
        const word = small.slice(0, i)
        const correctSmaller = !small.split(word).join('').length;
        const correctLarger = !long.split(word).join('').length;

        if (correctSmaller && correctLarger) return word;
    }
    return ""
};
