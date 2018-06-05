import Graph from '../src/structures/directed-graph';

test('can add vertex', () => {
  let g = new Graph();
  g.addVertex('A');
  expect(g.contains('A')).toBe(true);
});

test('can add edges between vertices', () => {
  let g = new Graph();
  g.addVertex('A');
  g.addVertex('B');
  g.addEdge('A', 'B');
  expect(g.hasEdge('A', 'B')).toBe(true);
});

test('can remove edges between vertices', () => {
  let g = new Graph();
  g.addVertex('A');
  g.addVertex('B');
  g.addEdge('A', 'B');
  g.removeEdge('A', 'B');
  expect(g.hasEdge('A', 'B')).toBe(false);
});

test('can remove vertices', () => {
  let g = new Graph();
  g.addVertex('A');
  g.addVertex('B');
  g.addEdge('B', 'A');
  g.removeVertex('A');
  expect(g.hasEdge('B', 'A')).toBe(false);
});
