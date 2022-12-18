/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const answer = []
    const length = temperatures.length
    
    for (let i = 0; i < length; i++){
        let j = i + 1
        let count = 1
        while (j < length){
            if (temperatures[j] > temperatures[i]) break
            count++
            j++
        }
        if (i === length - 1 || j === length) count = 0
        answer.push(count)        
    }
    
    return answer
};