/**
 * @param {character[][]} grid
 * @return {number}
 */

// function numIslands(grid) {
//   const H = grid.length;
//   const W = grid[0].length;
//   let count = 0;
  
//   for (let r = 0; r < H; r++) {
//     for (let c = 0; c < W; c++) {
//       if (grid[r][c] === '0') continue;
      
//       count++;
//       dfs(r, c);
//     }
//   }
//   return count;
  
//   function dfs(r, c) {
//     if (r < 0 || c < 0 || r === H || c === W) return;
//     if (grid[r][c] === '0') return;
    
//     grid[r][c] = '0';
//     dfs(r-1, c);
//     dfs(r+1, c);
//     dfs(r, c-1);
//     dfs(r, c+1);
//   }
// }

const numIslands = (grid) => {
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
  if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return false;
  
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