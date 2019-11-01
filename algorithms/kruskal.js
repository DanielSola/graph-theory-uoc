const UnionFind = require('../data_structures/UnionFind');

const kruskal = graph => {
  const generatorEdges = [];
  const vertices = [];

  for(const vertex of graph) {
    vertices.push(vertex.a);
    vertices.push(vertex.b);
  }

  const uniqueVertices = new Set(vertices);
  const uf = new UnionFind(uniqueVertices);

  while (generatorEdges.length < uniqueVertices.size - 1) {
    const sorted = graph.sort((a,b) => a.cost - b.cost);
    const minCostEdge = sorted.shift();
    const { a: nodeA, b: nodeB } = minCostEdge;
    const parentA = uf.find(nodeA);
    const parentB = uf.find(nodeB);
    const haveSameParent = parentA === parentB;

    if(!haveSameParent) {
      generatorEdges.push(minCostEdge);
      uf.union(nodeA, nodeB);
    }
  }

  return generatorEdges;
};

const graph = [
  { a: 1, b: 4, cost: 1 },
  { a: 2, b: 5, cost: 10 },
  { a: 1, b: 2, cost: 2 },
  { a: 6, b: 7, cost: 1 },
  { a: 5, b: 7, cost: 6 },
  { a: 4, b: 5, cost: 2 },
  { a: 1, b: 3, cost: 4 },
  { a: 4, b: 7, cost: 4 },
  { a: 3, b: 4, cost: 2 },
  { a: 3, b: 6, cost: 5 },
  { a: 4, b: 6, cost: 8 },
  { a: 2, b: 4, cost: 3 },
];

const generatorGraph = kruskal(graph);

console.log('Generator graph: ', generatorGraph);