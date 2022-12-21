/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    if (!dislikes.length) return true
    
    const graph = []
    let color = new Array(n + 1).fill(-1);
    
    for(let i = 1; i < n + 1; i++){
        graph[i] = [];
    }
    
    for (let [ a, b ] of dislikes){     
        graph[a].push(b)
        graph[b].push(a)
    }
    
    for(let i = 1; i <= n; i++){
        if(color[i] == -1){
            if(!isBipartite(graph,color,i)){
                return false;
            }
        }
    }
    
    return true;
};

var isBipartite = function(adj, color, curr){
    
    const queue = [curr];
    color[curr] = 1;
    let curColor = null;
    
    while(queue.length){
        const current = queue.shift();
        curColor = color[current]; 
        
        for (let i = 0; i < adj[current].length; i++){
            
            const v = adj[current][i];
            
            if (color[v] == -1){
                color[v] = 1 - curColor;
                queue.push(v);
            } else if (color[v] == curColor) return false;
        }
    } 
    return true;
}