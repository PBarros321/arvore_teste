treeJson = d3.json("data.json", function (error, treeData) {
    dTree.init(treeData,
        {
            target: "#graph",
            debug: true,
            marriageNodeSize: 20,
            hideMarriageNodes: false,
            height: 1400,
            width: 2800,
            callbacks: {
                // IMPLEMENTAÇÃO DO CLIQUE ESQUERDO
                nodeClick: function (name, extra) {
                    // Chama a função que preenche e exibe o modal
                    openPersonModal(name, extra);
                },

                // Sua função de clique direito (mantida)
                nodeRightClick: function (name, extra) {
                    alert('Right-click: ' + name);
                },

                // Sua função textRenderer (mantida)
                textRenderer: function (name, extra, textClass) {
                    if (extra && extra.nickname)
                        name = name + " (" + extra.nickname + ")";
                    return "<p class='" + textClass + "'>" + name + "</p>";
                },

                // Suas funções de clique em casamento (mantidas)
                marriageClick: function (extra, id) {
                    alert('Clicked marriage node' + id);
                },
                marriageRightClick: function (extra, id) {
                    alert('Right-clicked marriage node' + id);
                },
            }
        });
});