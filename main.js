// Voorbeeld jQuery code
$(document).ready(function() {
   console.log("jQuery is geladen!");

   // Vis.js netwerk visualisatie
   var nodes = new vis.DataSet([
       {id: 1, label: 'Node 1'},
       {id: 2, label: 'Node 2'},
       {id: 3, label: 'Node 3'}
   ]);

   var edges = new vis.DataSet([
       {from: 1, to: 2},
       {from: 1, to: 3}
   ]);

   var container = document.getElementById('network');
   var data = { nodes: nodes, edges: edges };
   var options = {};
   var network = new vis.Network(container, data, options);
});
