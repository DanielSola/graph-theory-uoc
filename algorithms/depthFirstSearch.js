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

const dfs = graph => {
  const [vertex, edges] = graph;
  const verticesStack = [];
  const visitedVertices = {};
  const startingVertex = vertex[0];

  visitedVertices[startingVertex] = true;
  verticesStack.push(startingVertex);

  while (verticesStack.length) {
    const currentVertex = verticesStack[verticesStack.length - 1];
    console.log('Visiting vertex:', currentVertex);
    const adjacentVertices = getAdjacentVertices(currentVertex, edges);
    const unvisitedVertex = adjacentVertices
      .filter(adjacentVertex => !visitedVertices[adjacentVertex])
      .sort()
      .shift();

    if (unvisitedVertex) {
      verticesStack.push(unvisitedVertex);
      visitedVertices[unvisitedVertex] = true;
    } else {
      verticesStack.pop();
    }
  }
};

dfs(graph);
