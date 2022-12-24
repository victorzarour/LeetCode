/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(A) {
    let common = A[0].split('').filter(char => {
        for (var i = 1; i < A.length; i++) {
            if (!A[i].includes(char)) return false;
            else {
                A[i] = A[i].replace(char, '')
            }
        }
        return true;
    })
	return common

};