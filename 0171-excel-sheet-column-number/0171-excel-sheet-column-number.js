/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let output = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        output += (columnTitle.charCodeAt(columnTitle.length - 1 - i) - 64) * 26**i;
    }
    return output;
};