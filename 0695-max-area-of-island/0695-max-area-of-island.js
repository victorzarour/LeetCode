/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = -Infinity
    
    for (let r = 0; r < grid.length; r++){
        for (let c = 0; c < grid[0].length; c++){
            if (grid[r][c] === "0") continue
            max = Math.max(max, exploreGrid(grid, r, c))
        }
    }
    return max
};

const exploreGrid = (grid, r, c) => {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return 0
    if (grid[r][c] === 0) return 0
    
    grid[r][c] = 0
    
    let size = 1
    size += exploreGrid(grid, r + 1, c)
    size += exploreGrid(grid, r - 1, c)
    size += exploreGrid(grid, r, c + 1)
    size += exploreGrid(grid, r, c - 1)
    
    return size
}