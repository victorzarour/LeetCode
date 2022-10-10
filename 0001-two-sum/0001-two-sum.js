function twoSum(nums, target){
    
    // for (let i = 0; i < nums.length; i++){
    //     for (let j = i+1; j < nums.length; j++){
    //         if (nums[i] + nums[j] === target) return [i, j]
    //     }
    // }
    
    let count = []
    
    for (let i = 0; i < nums.length; i++){
        let needed = target - nums[i]
        
        if (count.includes(needed)) return [count.indexOf(needed), i]
        else count.push(nums[i])
    }
    
    
}
