/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const visited = new Set()
    const visiting = new Set()
    
    const graph = {}
    for (let  [ a, b ] of prerequisites){
        if (!graph[a]) graph[a] = []
        if (!graph[b]) graph[b] = []
        graph[a].push(b)
    }
    
    for (let course in graph){
        if (hasCycle(graph, visited, visiting, course)) return false
    }
    
    return true
};

const hasCycle = (graph, visited, visiting, course) => {
    if (visited.has(course)) return false
    if (visiting.has(course)) return true
    visiting.add(course)
    
    for (let neighbor of graph[course]){
        if (hasCycle(graph, visited, visiting, neighbor)) return true
    }
    
    visiting.delete(course)
    visited.add(course)
}