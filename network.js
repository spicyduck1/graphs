// Nodes and edges data
var nodes = new vis.DataSet([
  { id: 1, label: "Node 1" },
  { id: 2, label: "Node 2" },
  { id: 3, label: "Node 3" },
  { id: 4, label: "Node 4" },
  { id: 5, label: "Node 5" },
]);

var edges = new vis.DataSet([
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 3, to: 5 },
]);

// Creating a network
var container = document.getElementById("network");
var data = {
  nodes: nodes,
  edges: edges,
};
var options = {
  physics: {
    enabled: true,
  },
};

var network = new vis.Network(container, data, options);
