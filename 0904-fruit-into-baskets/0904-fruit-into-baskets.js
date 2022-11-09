/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    
	let max = 0, l = 0, size = 0, map = {}
    
	fruits.forEach((fruit, i) => {
        
		map[fruit] ? map[fruit]++ : (map[fruit] = 1, size++)
        
		while (size > 2) {
            
			const tail = fruits[l]
            
			if (--map[tail] === 0) delete map[tail], size--
            
			l++
		}
        
		max = Math.max(max, i - l + 1)
        
	})
	return max
}