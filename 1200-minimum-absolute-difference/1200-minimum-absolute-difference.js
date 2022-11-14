/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  let min = Infinity
  let sorted = arr.sort((a,b) => a - b)
  let minArray = []
  
  for (let i = 0; i < sorted.length - 1; i++){
    min = Math.min(min, sorted[i + 1] - sorted[i])
  }
    
  for (let i = 0; i < sorted.length - 1; i++){
   if (sorted[i + 1] - sorted[i] === min) minArray.push([sorted[i], sorted[i + 1]])
  }
    
  return minArray
};