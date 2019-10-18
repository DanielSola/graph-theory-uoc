const dijkstra = (graph, startVertex) => {
  const solutions = {};

  solutions[startVertex] = [];
  solutions[startVertex].dist = 0;

  while (true) {
    let parent = null;
    let nearest = null;
    let dist = Infinity;

    for (const n in solutions) {
      const nodeDistance = solutions[n].dist;
      const adjacentNodes = graph[n];
      
      for (const a in adjacentNodes) {
        if (solutions[a]) continue;

        const currentDistance = adjacentNodes[a] + nodeDistance;

        if (currentDistance < dist) {
          parent = solutions[n];
          nearest = a;
          dist = currentDistance;
        }
      }
    }

    if (dist === Infinity) {
      break;
    }

    solutions[nearest] = parent.concat(nearest);
    solutions[nearest].dist = dist;
  }

  return solutions;
}

const graph = {
  A: {
    F: 4,
    E: 2,
    D: 4,
    C: 4,
    B: 1,
  },
  B: {
    A: 1,
    E: 4,
    C: 1,
  },
  C: {
    D: 1,
    E: 4,
    A: 4,
    B: 1,
  },
  D: {
    E: 1,
    A: 4,
    C: 1,
  },
  E: {
    F: 1,
    A: 2,
    B: 4,
    C: 4,
    D: 1,
  },
  F: {
    A: 4,
    E: 1,
  },
};

const vertices = Object.keys(graph);

for (const vertex of vertices) {
  const solutions = dijkstra(graph, vertex);
  console.log(solutions);
}
