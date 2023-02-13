/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    const graph = {}, coloring = {}

    for (let [ a, b ] of dislikes){
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b) 
        graph[b].push(a)
    }

    for (let node in graph) {
        if (!(node in coloring) && !validate(graph, node, coloring, false)) return false
    }
    
    return true
};

const validate = (graph, node, coloring, currentColor) => {
    if (node in coloring) return currentColor === coloring[node];
    coloring[node] = currentColor

    for (let neighbor of graph[node]) {
        if (!validate(graph, neighbor, coloring, !currentColor)) return false
    }
    return true
}