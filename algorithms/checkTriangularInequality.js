const checkTriangularInequality = graph => {
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

        if (currentDistance < previousDistance) {
          console.log('Triangular Inequality', i,j,k);
          return true;
        }
      });
    });
  });

  return false;
};

const graphCities = {
  Castelldefels: {
    Clement: 7,
    Gava: 4,
  },
  Clement: {
    Castelldefels: 7,
    Gava: 5,
    Coloma: 3,
  },
  Gava: {
    Castelldefels: 4,
    Clement: 5,
    Prat: 9,
  },
  Coloma: {
    Clement: 3,
    Prat: 12,
    Rubi: 18,
    Cugat: 15,
  },
  Prat: {
    Gava: 9,
    Coloma: 12,
    Cugat: 22,
    Barcelona: 11,
  },
  Barcelona: {
    Prat: 11,
    Cugat: 20,
    Sabadell: 25,
    Badalona: 14,
  },
  Cugat: {
    Rubi: 4,
    Coloma: 15,
    Prat: 22,
    Barcelona: 20,
    Sabadell: 8,
  },
  Badalona: {
    Barcelona: 14,
    Sabadell: 18,
  },
  Sabadell: {
    Cugat: 8,
    Barcelona: 25,
    Badalona: 18,
  },
  Rubi: {
    Coloma: 18,
    Cugat: 4,
  },
};

const hasInequality = checkTriangularInequality(graphCities);

console.log(hasInequality);
