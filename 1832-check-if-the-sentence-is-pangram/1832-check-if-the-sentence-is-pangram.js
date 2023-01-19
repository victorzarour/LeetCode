/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const map = new Map()
    for (let letter of alphabet) {
        map.set(letter.toLowerCase(), 0)
    }
    for (let char of sentence) {
        map.set(char, map.get(char) + 1)
    }
    for (let val of map.values()) {
        if (val === 0) return false
    }
    return true
};