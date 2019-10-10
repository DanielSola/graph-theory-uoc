const vertex = [1,2,3,4,5,6,7];
const edges = [[4,1], [1,3], [1,2], [3,6], [2,5], [5,6], [6,7]];
const graph = [vertex, edges];

const getNextVertex = (adjacentEdges, currentVertex, visitedVertices) => {
    const adjacentVertices = [];

    for(const edges of adjacentEdges) {
        const adjacentVertex = edges.find(
          vertex =>
            vertex !== currentVertex && !visitedVertices.includes(vertex)
        );

        adjacentVertices.push(adjacentVertex);
    }
    
    const sortedAdjacentVertices = adjacentVertices.sort();
    const nextVertex = sortedAdjacentVertices.shift();
    
    return nextVertex;
}

const exploreVertex = (currentVertex, visitedVertices, currentVertices, verticesStack) => {
    currentVertices.push(currentVertex);
    verticesStack.push(currentVertex);
    
    const adjacentEdges = edges.filter(edge => edge.includes(currentVertex));
    const nextVertex = getNextVertex(adjacentEdges, currentVertex, visitedVertices);

    visitedVertices.push(currentVertex);

    return nextVertex;
};

const dfs = graph => {
    const [ vertex, edges ] = graph;
    const startingVertex = vertex[0];
    const verticesStack = [];
    const visitedVertices = [];
    const currentVertices = [];

    let currentVertex = startingVertex;

    while(visitedVertices < vertex.length) {
        let nextVertex = exploreVertex(currentVertex, visitedVertices, currentVertices, verticesStack);
        currentVertex = nextVertex;
    }
}

dfs(graph);