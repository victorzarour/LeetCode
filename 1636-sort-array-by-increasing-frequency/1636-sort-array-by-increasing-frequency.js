/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
        let map = new Map()
    
    for (let num of nums){
        if (map.get(num)) map.set(num, map.get(num) + 1)
        else map.set(num, 1)
    }
    
    return nums.sort((a,b)=>{
        if(map.get(a) === map.get(b)){
          return b-a
        }else{
          return map.get(a) - map.get(b)
        }
      })    
    
};