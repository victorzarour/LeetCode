/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    return T.map((temp, idx) => {
        let nextDay = 0
        for(let i = idx + 1; i < T.length; i++) {
            if(temp < T[i]) {
                nextDay = i - idx
                return nextDay
            }
        }
        return nextDay
    })
};