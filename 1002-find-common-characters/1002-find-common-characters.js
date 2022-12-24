/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let common = words[0].split('').filter(char => {
        for (let i = 1; i < words.length; i++) {
            if (!words[i].includes(char)) return;
            else {
                words[i] = words[i].replace(char, '')
            }
        }
        return true;
    })
	return common

};