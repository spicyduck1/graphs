// Wacht tot het document klaar is (met jQuery)
$(document).ready(function() {
    console.log("jQuery is geladen en ready!");

    // Definieer de knooppunten voor het netwerk
    var nodes = new vis.DataSet([
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'}
    ]);

    // Definieer de verbindingen (edges) tussen de knooppunten
    var edges = new vis.DataSet([
        {from: 1, to: 2},
        {from: 1, to: 3}
    ]);

    // Maak een container voor het netwerk
    var container = document.getElementById('network');

    // De data voor het netwerk (knooppunten en verbindingen)
    var data = { nodes: nodes, edges: edges };

    // Opties voor het netwerk (bijvoorbeeld instellingen voor weergave)
    var options = {};

    // Maak het netwerk aan
    var network = new vis.Network(container, data, options);
});
