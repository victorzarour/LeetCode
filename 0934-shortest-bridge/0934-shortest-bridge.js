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


    let diff = aIsland.length > bIsland.length ? calculateDistance(bIsland, aIsland) : calculateDistance(aIsland, bIsland);
    return diff


    function dfs(A, i, j, result) {

        if (i < 0 || j < 0 || i >= A.length || j >= A.length || A[i][j] != 1) return;

        A[i][j] = 0;
        result.push([i, j])

        dfs(A, i - 1, j, result);
        dfs(A, i + 1, j, result);
        dfs(A, i, j - 1, result);
        dfs(A, i, j + 1, result);
    }



    function calculateDistance(aDistances, bDistance) {
        let min = Infinity;

        for (let i = 0; i < aDistances.length; i++) {
            for (let j = 0; j < bDistance.length; j++) {

                //find distance and  -1 beacuse beacuse it includes on of the points
                let calculateDiff = Math.abs(aDistances[i][0] - bDistance[j][0]) + Math.abs(aDistances[i][1] - bDistance[j][1]) - 1
                min = Math.min(calculateDiff, min)
            }
        }

        return min
    }
};
    
