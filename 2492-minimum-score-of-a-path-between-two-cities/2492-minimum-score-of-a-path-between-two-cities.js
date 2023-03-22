/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
      const graph = {}
      const visited = new Set([])

      for (const [ a, b, distance ] of roads) {
        if (!graph[a]) graph[a] = []
        if (!graph[b]) graph[b] = []

        graph[a].push([b, distance])
        graph[b].push([a, distance])
      }

      const queue = [ 1 ];
      visited.add(1);
      let ans = Infinity;

      while (queue.length) {
        const node = queue.shift();
        for (const [ next, distance ] of graph[node]) {
          ans = Math.min(ans, distance);
          if (visited.has(next)) continue;

          visited.add(next);
          queue.push(next);
        }
      }

      return ans;
    
};