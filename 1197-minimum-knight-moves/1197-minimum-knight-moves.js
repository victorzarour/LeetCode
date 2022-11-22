/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
  const visited = new Set()
  visited.add(0, 0)
  const queue = [ [0, 0, 0] ]
  
  while (queue.length){
    const [ r, c, steps ] = queue.shift()
    if (r === x && c === y) return steps
    const neighbors = getNeighbors(r, c)
    for (let neighbor of neighbors){
      const [ row, col ] = neighbor
      const position = `${row}, ${col}`
      if (!visited.has(position)){
        visited.add(position)
        queue.push([row, col, steps + 1])
      }
    }
  }
  return null
};

const getNeighbors = (r, c) => {
  const positions = [
    [r + 2, c + 1],
    [r - 2, c + 1],
    [r + 2, c - 1], 
    [r - 2, c - 1],
    [r + 1, c + 2],
    [r - 1, c + 2],
    [r + 1, c - 2], 
    [r - 1, c - 2]
  ]
  
  return positions
}