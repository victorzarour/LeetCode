/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let n = nums.length, answer = 0;
    nums.sort((a,b) => a-b);

    for (let i = 0; i < n; i += 2)
        answer += nums[i];

    return answer;
};