const floyd = graph => {
  let distance = {};
  const vertices = Object.keys(graph);

  for (const vertex of vertices) {
    distance[vertex] = {};

    const edges = graph[vertex];
    for (edge in edges) {
      distance[vertex][edge] = graph[vertex][edge];
    }

    vertices.forEach(n => {
      if (distance[vertex][n] == undefined) {
        distance[vertex][n] = Infinity;
      }

      if (vertex === n) {
        distance[vertex][n] = 0;
      }
    });
  }

  vertices.forEach(i => {
    vertices.forEach(j => {
      vertices.forEach(k => {
        const currentDistance = distance[i][k] + distance[k][j];
        const previousDistance = distance[i][j];

        if (currentDistance < previousDistance)
          distance[i][j] = currentDistance;
      });
    });
  });

  return distance;
};

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
const distances = floyd(graph);

console.log(distances);
