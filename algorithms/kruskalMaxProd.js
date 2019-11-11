const UnionFind = require('../data_structures/UnionFind');

const kruskalMaxProd = graph => {
  const generatorEdges = [];
  const vertices = [];

  for(const vertex of graph) {
    vertices.push(vertex.a);
    vertices.push(vertex.b);
  }

  const uniqueVertices = new Set(vertices);
  const uf = new UnionFind(uniqueVertices);
  const sortByLog = (a,b) => Math.log(b.cost) - Math.log(a.cost);
  const sorted = graph.sort(sortByLog);

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
  { a: 'A1', b: 'C1', cost: 0.71 },
  { a: 'A1', b: 'C2', cost: 0.68 },
  { a: 'A1', b: 'A2', cost: 0.75 },
  { a: 'A2', b: 'A1', cost: 0.75 },
  { a: 'A2', b: 'C1', cost: 0.78 },
  { a: 'A2', b: 'C2', cost: 0.81 },
  { a: 'A2', b: 'B2', cost: 0.75 },
  { a: 'B2', b: 'A2', cost: 0.75 },
  { a: 'B2', b: 'C1', cost: 0.82 },
  { a: 'B2', b: 'C2', cost: 0.85 },
  { a: 'C1', b: 'A1', cost: 0.71 },
  { a: 'C1', b: 'C2', cost: 0.7 },
  { a: 'C1', b: 'B2', cost: 0.82 },
  { a: 'C1', b: 'A2', cost: 0.78 },
  { a: 'C2', b: 'C1', cost: 0.7 },
  { a: 'C2', b: 'A1', cost: 0.68 },
  { a: 'C2', b: 'A2', cost: 0.81 },
  { a: 'C2', b: 'B2', cost: 0.85 },
];

const generatorGraph = kruskalMaxProd(graphCross);

console.log('Generator graph: ', generatorGraph);