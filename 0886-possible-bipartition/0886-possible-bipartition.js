/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    
    let adjList = new Array(N+1);    
    let color = new Array(N+1).fill(-1);
    
    for(let i = 1; i < N+1; i++){
        adjList[i] = [];
    }
    
    for(let i of dislikes){
        let [u,v] = i;
        adjList[u].push(v);
        adjList[v].push(u);
    }
    
    for(let i =1; i < N+1; i++){
        if(color[i] == -1){
            if(!isBipartite(adjList,color,i)){
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