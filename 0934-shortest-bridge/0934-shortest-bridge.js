/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    const firstIsland = []
    const secondIsland = []
    
    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid[0].length; col++){
            if (grid[row][col] === 1){
                if (!firstIsland.length) traverseGraph(grid, row, col, firstIsland)
                else if (!secondIsland.length) traverseGraph(grid, row, col, secondIsland)     
            }
        }
    }
    return calculateDistance(firstIsland, secondIsland)
};

const traverseGraph = (A, i, j, result) => {
        if (i < 0 || j < 0 || i >= A.length || j >= A.length || A[i][j] != 1) return;

        //mark as visited
        A[i][j] = 0;
        result.push([i, j])

        traverseGraph(A, i - 1, j, result);
        traverseGraph(A, i + 1, j, result);
        traverseGraph(A, i, j - 1, result);
        traverseGraph(A, i, j + 1, result);
}

const calculateDistance = (firstIsland, secondIsland) => {
    let min = Infinity
    for (let i = 0; i < firstIsland.length; i++){
        for (let j = 0; j < secondIsland.length; j++){
            let difference = Math.abs(firstIsland[i][0] - secondIsland[j][0]) + Math.abs(firstIsland[i][1] - secondIsland[j][1]) - 1
            min = Math.min(min, difference)
        }
    }
    return min
}