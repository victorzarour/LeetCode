/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let sum = 0, total = 0, start = 0
    
    for (let i = 0; i < gas.length; i++) {
        sum += (gas[i] - cost[i])
        total += (gas[i] - cost[i])
        if (sum < 0) {
            sum = 0
            start = i + 1
        }
    }
    return total >= 0 ? start : -1
};