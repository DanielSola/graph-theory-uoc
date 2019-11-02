const prim = (graph, startVertex) => {
  const visited = {};
  const distances = {};

  for (const vertex in graph) {
    distances[vertex] = { value: Infinity, from: startVertex }
  }

  distances[startVertex] = { value: 0, from: startVertex };

  const stack = [];

  stack.push(startVertex);

  for(element in graph) {
    const node = stack.pop();

    visited[node] = true;

    const children = graph[node];

    for (const child in children) {
      const childDistance = children[child];
      const currentDistance = distances[child].value;

      if ((childDistance < currentDistance) && !visited[child]) {
        distances[child] = { value: childDistance, from: node };
      }
    }

    let minDistanceNode;
    let minDistance = Infinity;
    
    for (const node in distances) {
      const nodeDistance = distances[node].value;

      if ((nodeDistance < minDistance) && !visited[node]) {
        minDistance = nodeDistance;
        minDistanceNode = node;
      }
    }

    stack.push(minDistanceNode);
  }

  return distances;
}

const graph = {
  1: {
    2: 2,
    4: 1,
    3: 4,
  },
  2: {
    1: 2,
    4: 3,
    5: 10,
  },
  3: {
    1: 4,
    4: 2,
    6: 5,
  },
  4: {
    1: 1,
    2: 3,
    5: 2,
    7: 4,
    6: 8,
    3: 2,
  },
  5: {
    2: 10,
    4: 2,
    7: 6,
  },
  6: {
    3: 5,
    4: 8,
    7: 1,
  },
  7: {
    6: 1,
    4: 4,
    5: 6,
  },
};

const solutions = prim(graph, 1);
console.log('MST', solutions);

