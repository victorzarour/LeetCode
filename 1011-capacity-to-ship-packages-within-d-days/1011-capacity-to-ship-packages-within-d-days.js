/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    
    let low = Math.max(...weights)
    let high = weights.reduce((sum, a) => sum + a)
    
    while (low < high) {
        let mid = Math.floor((high + low) / 2)
        let sum = 0, count = 1
        
        for (let weight of weights) {
            if (sum + weight > mid) {
                count++
                sum = weight
            } else sum += weight
        }
        
        if (count > days) low = mid + 1
        else high = mid
    }
    return low
};


//  weights = [1,2,3,4,5,6,7,8,9,10]
//  10, 55

var shipWithinDays = function(weights, D) {
    
    function getDays(capacity) {
        let days = 1, total = 0;
        
        for(let n of weights) {
            total += n;
            if(total > capacity) {
                total = n;
                days++;
            }
        }
        return days;
    }
    
    let start = Math.max(...weights), 
        end = weights.reduce((acc, cur) => acc + cur, 0);
    
    while(start < end) {
        const mid = Math.floor((end+start)/2);
        const days = getDays(mid);
        if(days > D) start = mid+1;
        else end = mid;
    }
    return end;
};