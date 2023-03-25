/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

var countPairs = function (n, edges) {
  const graph = buildGraph(edges, n)
    
//   for (const [v1, v2] of edges) {
//     graph[v1].push(v2);
//     graph[v2].push(v1);
//   }
    console.log(graph)

  const counts = [],  visited = new Set();
    
  for (let node in graph) {
    if (visited.has(String(node))) continue;
    visited.add(String(node));
    const count = dfs(node, graph, visited);
    counts.push(count);
  }

console.log(counts)
  let ans = 0, sum = counts[0];
  for (let i = 1; i < counts.length; i++) {
    ans += sum * counts[i];
    sum += counts[i];
  }

  return ans;
};

function dfs(node, graph, visited) {
  let count = 1;
    
  for (const child of graph[node]) {
    if (visited.has(String(child))) continue;
    visited.add(String(child));
    count += dfs(child, graph, visited);
  }

  return count;
}

const buildGraph = (edges, n) => {
  const graph = {}
  
  for (let i = 0; i < n; i++) {
      graph[i] = []
  }
  
  for (let [ a, b ] of edges){
    graph[a].push(b)
    graph[b].push(a)
  }
  
  return graph
}