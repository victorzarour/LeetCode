/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let noSpaces = s.split(" ")
    
    let newMap = noSpaces.filter(char => char !== "")
    
    return newMap[newMap.length - 1].length
    
    
};