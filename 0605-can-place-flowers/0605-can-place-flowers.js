/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0, previous = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (previous === 0 && flowerbed[i] === 0 && (flowerbed[i + 1] === 0 || i === flowerbed.length - 1)) {
            count++
            flowerbed[i] = 1
        }
        previous = flowerbed[i]
    }
    return count >= n
};