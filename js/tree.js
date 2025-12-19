treeJson = d3.json("data.json", function (error, treeData) {
    dTree.init(treeData,
        {
            target: "#graph",
            debug: true,
            marriageNodeSize: 20,
            hideMarriageNodes: false,
            height: window.innerHeight,
            width: window.innerWidth,
            nodeWidth: 100,
            nodeHeight: 60,
            zoom: true,
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


                textRenderer: function (name, extra, textClass) {
                    let html = "<p class='name-label'>" + name + "</p>";
                    if (extra && extra.nickname) {
                        html += "<p class='nickname-label'>(" + extra.nickname + ")</p>";
                    }
                    return html;
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