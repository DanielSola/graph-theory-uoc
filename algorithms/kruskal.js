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
  const sorted = graph.sort((a,b) => a.cost - b.cost);
  
  while (generatorEdges.length < uniqueVertices.size - 1) {
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

const graphCross = [
  { a: 'A', b: 'B', cost: 7 },
  { a: 'A', b: 'C', cost: 9 },
  { a: 'A', b: 'D', cost: 12 },
  { a: 'A', b: 'E', cost: 13 },
  { a: 'A', b: 'F', cost: 11 },
  { a: 'B', b: 'C', cost: 16 },
  { a: 'B', b: 'D', cost: 16 },
  { a: 'B', b: 'E', cost: 15 },
  { a: 'B', b: 'F', cost: 13 },
  { a: 'C', b: 'D', cost: 14 },
  { a: 'C', b: 'E', cost: 14 },
  { a: 'C', b: 'F', cost: 16 },
  { a: 'D', b: 'E', cost: 25 },
  { a: 'D', b: 'F', cost: 5 },
  { a: 'E', b: 'F', cost: 24 },
];

const generatorGraph = kruskal(graphCross);

console.log('Generator graph: ', generatorGraph);