const vertex = [1, 2, 3, 4, 5, 6, 7];
const edges = [[4, 1], [1, 3], [1, 2], [3, 6], [2, 5], [5, 6], [6, 7]];
const graph = [vertex, edges];

const getAdjacentVertices = (vertex, edges) => {
  const adjacentVertices = [];

  for (const edge of edges) {
    if (edge.includes(vertex)) {
      const adjacentVertex = edge.filter(edgeVertex => edgeVertex !== vertex);

      adjacentVertices.push(...adjacentVertex);
    }
  }

  return adjacentVertices.sort();
};

const bfs = graph => {
  const [vertex, edges] = graph;
  let verticesStack = [];
  const visitedVertices = {};
  const startingVertex = vertex[0];

  visitedVertices[startingVertex] = true;
  verticesStack.push(startingVertex);

  while (verticesStack.length) {
    const currentVertex = verticesStack.pop();
    console.log('Current', currentVertex);
    const adjacentVertices = getAdjacentVertices(currentVertex, edges);

    for (const adjacentVertex of adjacentVertices) {
      const vertexNotVisited = !visitedVertices[adjacentVertex];

      if (vertexNotVisited) {
        verticesStack.push(adjacentVertex);
        visitedVertices[adjacentVertex] = true;
      }
    }
  }
};

bfs(graph);
