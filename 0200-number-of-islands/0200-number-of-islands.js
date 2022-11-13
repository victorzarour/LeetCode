/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
  let count = 0
  const visited = new Set()
  
  for (let r = 0; r < grid.length; r++){
    for (let c = 0; c < grid[r].length; c++){
      if (explore(grid, r, c, visited)) count++
    }
  }
  return count
};

const explore = (grid, r, c, visited) => {
  const rowLimit = r >= 0 && r < grid.length
  const columnLimit = c >= 0 && c < grid[0].length
   if (!rowLimit || !columnLimit) return false;
  
  if (grid[r][c] === "0") return false
  
  const pos = `${r}, ${c}`
  
  if (visited.has(pos)) return false
  visited.add(pos)
  
  explore(grid, r + 1, c, visited)
  explore(grid, r - 1, c, visited)
  explore(grid, r, c + 1, visited)
  explore(grid, r, c - 1, visited)
  
  return true
}