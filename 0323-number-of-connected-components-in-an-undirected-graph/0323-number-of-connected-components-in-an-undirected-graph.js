/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    
    const graph = createGraph(edges)
    const set = new Set()
    let count = 0
    let nodeCount = 0

    for (let node in graph){
    
        nodeCount++
        if (!set.has(String(node))) count++

        let stack = [ node ]

          while (stack.length){
              
            const current = stack.pop()
            
            set.add(String(current))

              for (let neighbor of graph[current]){
                if (!set.has(String(neighbor))) stack.push(neighbor)
              }
          }
    }

    return n === nodeCount ? count : count + (n - nodeCount)

    
    
    
};

const createGraph = (edges) => {
    let graph = {}
    
    for (let edge of edges){
        const [ a, b ] = edge
        
        if (!graph[a]) graph[a] = []
        if (!graph[b]) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)        
    }
    
    return graph
}