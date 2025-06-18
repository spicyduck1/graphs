// De knooppunten (nodes)
        var nodes = new vis.DataSet([
            { id: 1, label: 'Knooppunt 1' },
            { id: 2, label: 'Knooppunt 2' },
            { id: 3, label: 'Knooppunt 3' }
        ]);

        // De verbindingen (edges)
        var edges = new vis.DataSet([
            { from: 1, to: 2 },
            { from: 1, to: 3 }
        ]);

        // Het netwerkobject maken
        var container = document.getElementById('mijnNetwerk');
        var data = {
            nodes: nodes,
            edges: edges
        };
        var options = {
            nodes: {
                shape: 'dot',
                size: 15
            },
            edges: {
                width: 2
            },
            physics: {
                enabled: true
            }
        };

        var network = new vis.Network(container, data, options);
