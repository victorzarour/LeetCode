/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
//     let max = 0
//     let count = 0
    
//     for (let sentence of sentences){
//         count = 0
//         for (let char of sentence){
//             if (char === " ") count++
//         }
//         max = Math.max(max, count + 1)
//     }
    
//     return max
    
    let max = 0
    
    for (let sentence of sentences){
        max = Math.max(max, sentence.split(" ").length)
    }
    
    return max
};