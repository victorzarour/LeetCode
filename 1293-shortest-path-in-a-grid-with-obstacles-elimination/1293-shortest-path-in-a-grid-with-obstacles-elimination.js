/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
// var shortestPath = function(grid, k) {
//   const visited = new Set()
//   const queue = [[0, 0, 0, 0]]
  
//   while (queue.length){
//     let [ row, col, distance, obstacles ] = queue.shift()
    
//     if (row === grid.length - 1 && col === grid[0].length - 1) return distance
    
//     const coordinates = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    
//     for (let coordinate of coordinates){
        
//       const neighborRow = row + coordinate[0]
//       const neighborCol = col + coordinate[1]
      
//       const position = `${neighborRow}, ${neighborCol}`
      
//       const bounds = neighborRow >= 0 && neighborCol >= 0 && neighborRow < grid.length && neighborCol < grid[0].length
      
//       if (grid[neighborRow][neighborCol] === 1) obstacles++

//       if (bounds && !visited.has(position) && (grid[neighborRow][neighborCol] !== 1 || obstacles <= k)){
//         visited.add(position)
//         queue.push([neighborRow, neighborCol, distance + 1, obstacles])
//       }
//     }
//   }
//   return -1
// };

var shortestPath = function(grid, k) {
  const visited = new Set()
  const queue = [ [0, 0, 0, 0] ]
  
  while (queue.length){
    let [ row, col, distance, obstacles ] = queue.shift()

    const position = `${row}, ${col}, ${obstacles}`
      
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || visited.has(position) || obstacles > k) continue
    if (grid[row][col] === 1) obstacles++
    if (row === grid.length - 1 && col === grid[0].length - 1) return distance
      
    visited.add(position)  
      
    queue.push([row + 1, col, distance + 1, obstacles])
    queue.push([row - 1, col, distance + 1, obstacles])
    queue.push([row, col + 1, distance + 1, obstacles])
    queue.push([row, col - 1, distance + 1, obstacles])
  }
  return -1
};