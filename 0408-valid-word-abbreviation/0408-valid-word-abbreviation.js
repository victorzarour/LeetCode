/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let i = 0; // index for word
    let j = 0; // index for abbr
    
    while (i < word.length && j < abbr.length) {
        const wordChar = word.charAt(i);
        const abbrNum = parseInt(abbr.substring(j));
        
        if (abbrNum === 0) {
            return false;
        }
        else if (Number.isInteger(abbrNum)) {
            i += abbrNum;
            j += String(abbrNum).length;
        }
        else {
            const abbrChar = abbr.charAt(j);
            if (wordChar != abbrChar) return false;
            i++;
            j++;
        }
    }
    
    return i === word.length && j == abbr.length;
};