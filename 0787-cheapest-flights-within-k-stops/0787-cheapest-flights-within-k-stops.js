/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    const graph = buildGraph(flights, dst);
    if(graph === null) return -1;
    
    // 2. BFS but with optimizations (a) and (b)
    let queue = [{ from: src, costSoFar: 0, stopsLeft: K + 1 }]; // (1)
    let cheapest = Number.MAX_SAFE_INTEGER;
    
    while(queue.length) {
        let { from, costSoFar, stopsLeft, path } = queue.shift();
        
        if(!graph[from]) continue; // no flights from this stop
        
        // optimization (a) - simply don't continue searching this path if we've exhausted K stops
        if(stopsLeft <= 0) continue;
        // optimization (b) - simply don't continue searching if we've already found a cheaper cost already
        if(cheapest !== Number.MAX_SAFE_INTEGER && costSoFar > cheapest) continue;
        
        for(let [nextStop, cost] of Object.entries(graph[from])) {
            if(nextStop == dst) {
                cheapest = Math.min(cheapest, costSoFar + cost);
            } else {
                queue.push({ from: nextStop, costSoFar: costSoFar + cost, stopsLeft: stopsLeft - 1 });
            }
        }
    }
    
    return cheapest === Number.MAX_SAFE_INTEGER ? -1 : cheapest;
};

function buildGraph(flights, dst) {
    const graph = {};
    
    let hasPathToDest = false;
    
    for(const [from, to, cost] of flights) {
        if(!(from in graph)) graph[from] = {};
        graph[from] = { ...graph[from], [to]: cost };
        
        if(to === dst) hasPathToDest = true;
    }
    
    return hasPathToDest ? graph : null;
}