/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid, r = 0, c = 0, memo = {}) {
    const pos = r + ',' + c
    
    if (r === grid.length || c === grid[0].length) return Infinity
    if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c]
    if (pos in memo) return memo[pos]
    
    const down = minPathSum(grid, r + 1, c, memo)
    const right = minPathSum(grid, r, c + 1, memo)
    
    return memo[pos] = grid[r][c] + Math.min(down, right)
};