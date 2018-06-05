function GraphNode() {
  this.edges = {};
}

function Graph() {
  this.vertices = {};
}

Graph.prototype.contains = function(vert) {
  return !!this.vertices[vert];
};

Graph.prototype.addVertex = function(vert) {
  if (!this.contains(vert)) {
    this.vertices[vert] = new GraphNode();
  }
};

Graph.prototype.addEdge = function(src, dest) {
  if (this.contains(src) && this.contains(dest)) {
    this.vertices[src].edges[dest] = true;
  }
};

Graph.prototype.removeEdge = function(src, dest) {
  if (this.contains(src) && this.contains(dest)) {
    delete this.vertices[src].edges[dest];
  }
};

Graph.prototype.hasEdge = function(src, dest) {
  if (this.contains(src)) {
    return !!this.vertices[src].edges[dest];
  } else {
    return false;
  }
};

Graph.prototype.removeVertex = function(vert) {
  if (this.contains(vert)) {
    for (let v in this.vertices) {
      this.removeEdge(v, vert);
    }
    delete this.vertices[vert];
  } else {
    throw new Error(`Graph does not contain vertex ${vert}`);
  }
};

export default Graph;
