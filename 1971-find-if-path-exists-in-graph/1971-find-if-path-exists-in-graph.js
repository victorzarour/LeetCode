/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = createGraph(edges)
    
    const stack = [ source ]
    const set = new Set()
    
    while (stack.length){
        const current = stack.pop()
        set.add(current)
        if (current === destination) return true
        
        for (let edge of graph[current]) {
            if (!set.has(edge)) stack.push(edge)   
        }       
    }
    return false
};

const createGraph = (edges) => {
    const graph = {}
    
    for (let [ a, b ] of edges){
        if (!graph[a]) graph[a] = []
        if (!graph[b]) graph[b] = []
        
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}