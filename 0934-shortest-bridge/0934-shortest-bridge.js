/**
 * @param {number[][]} grid
 * @return {number}
 */

var shortestBridge = function (grid) {
    let aIsland = [];
    let bIsland = [];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                if (!aIsland.length) dfs(grid, row, col, aIsland)
                else if (!bIsland.length) dfs(grid, row, col, bIsland)
            }
        }
    }

    return calculateDistance(bIsland, aIsland)
}


function dfs(grid, row, col, result) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) return;

    grid[row][col] = 0;
    result.push([row, col])

    dfs(grid, row - 1, col, result);
    dfs(grid, row + 1, col, result);
    dfs(grid, row, col - 1, result);
    dfs(grid, row, col + 1, result);
}

function calculateDistance(aDistances, bDistance) {
    let min = Infinity;

    for (let i = 0; i < aDistances.length; i++) {
        for (let j = 0; j < bDistance.length; j++) {
            let calculateDiff = Math.abs(aDistances[i][0] - bDistance[j][0]) + Math.abs(aDistances[i][1] - bDistance[j][1]) - 1
            min = Math.min(calculateDiff, min)
        }
    }
    return min
}

    
