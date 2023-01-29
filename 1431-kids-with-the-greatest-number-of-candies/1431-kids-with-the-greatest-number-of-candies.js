/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const array = []
    for (let candy of candies) {
        array.push(candy + extraCandies >= Math.max(...candies))
    }
    return array
};