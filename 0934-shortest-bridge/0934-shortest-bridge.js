/**
 * @param {number[][]} grid
 * @return {number}
 */

const shortestBridge = (grid) => {
  let mainIsland;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const possibleIsland = traverseIsland(grid, r, c, new Set());
      if (possibleIsland.size > 0) {
        mainIsland = possibleIsland;
        break;
      }
    }
  }
  
  const visited = new Set(mainIsland);
  const queue = [];
  for (let pos of mainIsland) {
    const [ row, col ] = pos.split(',').map(Number);
    queue.push([row, col, 0]);
  }
  
  while (queue.length > 0) {
    const [ row, col, distance ] = queue.shift();
    
    const pos = row + ',' + col;
    if (grid[row][col] === 1 && !mainIsland.has(pos)) return distance - 1;
    
    const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let delta of deltas) {
      const [ deltaRow, deltaCol ] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const neighborPos = neighborRow + ',' + neighborCol;
      if (isInbounds(grid, neighborRow, neighborCol) && !visited.has(neighborPos)) {
        visited.add(neighborPos);
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
};

const isInbounds = (grid, row, col) => {
  const rowInbounds = 0 <= row  && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  return rowInbounds && colInbounds;
};

const traverseIsland = (grid, row, col, visited) => {
  if (!isInbounds(grid, row, col) || grid[row][col] === 0) return visited;
  
  const pos = row + ',' + col;
  if (visited.has(pos)) return visited;
  
  visited.add(pos);
  
  traverseIsland(grid, row - 1, col, visited);
  traverseIsland(grid, row + 1, col, visited);
  traverseIsland(grid, row, col - 1, visited);
  traverseIsland(grid, row, col + 1, visited);
  
  return visited;
};
    
