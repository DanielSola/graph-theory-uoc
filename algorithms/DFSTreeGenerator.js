const depthTree = graph => {
  const res = [];
  const stack = [];
  const seen = new Set();
  const onStack = new Set();
  const generatorEdges = [];

  stack.push('A');
  onStack.add('A');

  while (stack.length) {
    const currNode = stack.pop();

    onStack.delete(currNode);
    res.push(currNode);
    seen.add(currNode);
    const children = graph[currNode];

    children.forEach(child => {
      if (!seen.has(child)) {
        generatorEdges.push({ child, currNode });
        stack.push(child);
        seen.add(child);
      }
    });
  }

  return generatorEdges;
};

const petersenGraph = {
  A: ['B', 'G', 'C'],
  B: ['F', 'A', 'D'],
  C: ['A', 'H', 'E'],
  D: ['E', 'I', 'B'],
  E: ['D', 'C', 'J'],
  F: ['H', 'J', 'B'],
  G: ['A', 'I', 'J'],
  H: ['C', 'F', 'I'],
  I: ['D', 'G', 'H'],
  J: ['E', 'F', 'G']
};

const generatorGraph = depthTree(petersenGraph);

console.log('Generator graph', generatorGraph);