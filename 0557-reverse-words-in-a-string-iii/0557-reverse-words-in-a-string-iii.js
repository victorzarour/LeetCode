/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) { 
    // return s.split(" ").map(word => word.split("").reverse().join("")).join(" ")
    
    split = s.split(" ")
    
    for (let i = 0; i < split.length; i++) {
        let reversed = ""
        let wordLength = split[i].length - 1

        while (wordLength >= 0){
            reversed += split[i][wordLength];
            wordLength--
        }
        split[i] = reversed
    }
    return split.join(" ")
};