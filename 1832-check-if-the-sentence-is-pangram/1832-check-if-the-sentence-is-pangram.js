/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
   const set = new Set()
   
   for (let char of sentence) {
       set.add(char)
   }
   
   return set.size === 26
};