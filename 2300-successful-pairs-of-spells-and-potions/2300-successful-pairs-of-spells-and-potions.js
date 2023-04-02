/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    // Sort the potions array in increasing order.
    potions.sort((a, b) => a - b);
    const answer = [];

    const m = potions.length;
    const maxPotion = potions[m - 1];

    for (const spell of spells) {
        // Minimum value of potion whose product with current spell
        // will be at least success or more.
        const minPotion = Math.ceil(success / spell);
        // Check if we don't have any potion which can be used.
        if (minPotion > maxPotion) {
            answer.push(0);
            continue;
        }
        // We can use the found potion, and all potion in its right
        // (as the right potions are greater than the found potion).
        const index = lowerBound(potions, minPotion);
        answer.push(m - index);
    }

    return answer;
};

// Returns the lower bound of 'key' in the sorted array 'arr'.
function lowerBound(arr, key) {
    let low = 0, high = arr.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
};