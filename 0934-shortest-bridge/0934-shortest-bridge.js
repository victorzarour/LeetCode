/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    let firstIsland = []
    let secondIsland = []
    
    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid[0].length; col++){
            if (grid[row][col] === 1){
                if (!firstIsland.length) traverseGraph(grid, row, col, firstIsland)
                else if (!secondIsland.length) traverseGraph(grid, row, col, secondIsland)
            }
        }
    }
    return calculateDifference(firstIsland, secondIsland)
};

const traverseGraph = (grid, row, col, island) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0) return
    
    grid[row][col] = 0
    island.push([row, col])
    
    traverseGraph(grid, row + 1, col, island)
    traverseGraph(grid, row - 1, col, island)
    traverseGraph(grid, row, col + 1, island)
    traverseGraph(grid, row, col - 1, island)
}

const calculateDifference = (firstIsland, secondIsland) => {
    let min = Infinity
    for (let i = 0; i < firstIsland.length; i++){
        for (let j = 0; j < secondIsland.length; j++){
            let difference = Math.abs(firstIsland[i][0] - secondIsland[j][0]) + Math.abs(firstIsland[i][1] - secondIsland[j][1]) - 1
            min = Math.min(min, difference)
        }
    }
    return min
}