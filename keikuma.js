const elements = { nodes: [
    { data: {id: "n0" }, position: { x: 345, y: 160}},
    { data: {id: "n1" }, position: { x: 246, y: 160}},
    { data: {id: "n2" }, position: { x: 443, y: 160}},
    { data: {id: "n3" }, position: { x: 148, y: 160}},
    { data: {id: "n4" }, position: { x: 542, y: 160}},
    { data: {id: "n5" }, position: { x: 49, y: 160}},
    { data: {id: "n6" }, position: { x: -49, y: 160}},
    { data: {id: "n7" }, position: { x: -147, y: 160}},
    { data: {id: "n8" }, position: { x: 640, y: 160}},
    { data: {id: "n9" }, position: { x: 739, y: 160}},
    { data: {id: "n10" }, position: { x: 345, y: 327}},
    { data: {id: "n11" }, position: { x: 345, y: -6}},
    { data: {id: "n12" }, position: { x: 443, y: -6}},
    { data: {id: "n13" }, position: { x: 542, y: -6}},
    { data: {id: "n14" }, position: { x: 640, y: -6}},
    { data: {id: "n15" }, position: { x: 739, y: -6}},
    { data: {id: "n16" }, position: { x: 443, y: 327}},
    { data: {id: "n17" }, position: { x: 246, y: -6}},
    { data: {id: "n18" }, position: { x: 148, y: -6}},
    { data: {id: "n19" }, position: { x: 49, y: -6}},
    { data: {id: "n20" }, position: { x: -49, y: -6}},
    { data: {id: "n21" }, position: { x: 542, y: 327}},
    { data: {id: "n22" }, position: { x: 640, y: 327}},
    { data: {id: "n23" }, position: { x: 739, y: 327}},
    { data: {id: "n24" }, position: { x: 246, y: 327}},
    { data: {id: "n25" }, position: { x: 148, y: 327}},
    { data: {id: "n26" }, position: { x: 49, y: 327}},
    { data: {id: "n27" }, position: { x: -49, y: 327}},
    { data: {id: "n28" }, position: { x: 296, y: 243}},
    { data: {id: "n29" }, position: { x: 395, y: 243}},
    { data: {id: "n30" }, position: { x: 198, y: 243}},
    { data: {id: "n31" }, position: { x: 99, y: 243}},
    { data: {id: "n32" }, position: { x: 1, y: 243}},
    { data: {id: "n33" }, position: { x: -97, y: 243}},
    { data: {id: "n34" }, position: { x: 493, y: 243}},
    { data: {id: "n35" }, position: { x: 592, y: 243}},
    { data: {id: "n36" }, position: { x: 691, y: 243}},
    { data: {id: "n37" }, position: { x: 789, y: 243}},
    { data: {id: "n38" }, position: { x: 198, y: 77}},
    { data: {id: "n39" }, position: { x: 296, y: 77}},
    { data: {id: "n40" }, position: { x: 395, y: 77}},
    { data: {id: "n41" }, position: { x: 493, y: 77}},
    { data: {id: "n42" }, position: { x: 592, y: 77}},
    { data: {id: "n43" }, position: { x: 789, y: 77}},
    { data: {id: "n44" }, position: { x: 691, y: 77}},
    { data: {id: "n45" }, position: { x: 99, y: 77}},
    { data: {id: "n46" }, position: { x: 1, y: 77}},
    { data: {id: "n47" }, position: { x: -97, y: 77}},
    { data: {id: "n48" }, position: { x: 395, y: 410}},
    { data: {id: "n49" }, position: { x: 493, y: 410}},
    { data: {id: "n50" }, position: { x: 296, y: 410}},
    { data: {id: "n51" }, position: { x: 198, y: 410}},
    { data: {id: "n52" }, position: { x: 99, y: 410}},
    { data: {id: "n53" }, position: { x: 1, y: 410}},
    { data: {id: "n54" }, position: { x: 592, y: 410}},
    { data: {id: "n55" }, position: { x: 691, y: 410}},
    { data: {id: "n56" }, position: { x: 789, y: 410}},
    { data: {id: "n57" }, position: { x: 395, y: -89}},
    { data: {id: "n58" }, position: { x: 493, y: -89}},
    { data: {id: "n59" }, position: { x: 592, y: -89}},
    { data: {id: "n60" }, position: { x: 691, y: -89}},
    { data: {id: "n61" }, position: { x: 789, y: -89}},
    { data: {id: "n62" }, position: { x: 296, y: -89}},
    { data: {id: "n63" }, position: { x: 198, y: -89}},
    { data: {id: "n64" }, position: { x: 99, y: -89}},
    { data: {id: "n65" }, position: { x: 1, y: -89}},
    { data: {id: "n66" }, classes: ["enemy-fixed"], position: { x: -246, y: 160}},
    { data: {id: "start" }, position: { x: -291, y: 243}}
    ],
    edges: [
{ data: { id: "e0", source: "n66", target: "start"}, classes: ["live-fixed"]},
{ data: { id: "e1", source: "n66", target: "n7"}, classes: ["live-fixed"]},
{ data: { id: "e2", source: "n7", target: "n6"}},
{ data: { id: "e3", source: "n6", target: "n5"}},
{ data: { id: "e4", source: "n5", target: "n3"}},
{ data: { id: "e5", source: "n3", target: "n1"}},
{ data: { id: "e6", source: "n1", target: "n0"}},
{ data: { id: "e7", source: "n7", target: "n47"}},
{ data: { id: "e8", source: "n47", target: "n20"}},
{ data: { id: "e9", source: "n7", target: "n33"}},
{ data: { id: "e10", source: "n33", target: "n27"}},
{ data: { id: "e11", source: "n27", target: "n53"}},
{ data: { id: "e12", source: "n53", target: "n52"}},
{ data: { id: "e13", source: "n52", target: "n51"}},
{ data: { id: "e14", source: "n51", target: "n50"}},
{ data: { id: "e15", source: "n50", target: "n48"}},
{ data: { id: "e16", source: "n48", target: "n49"}},
{ data: { id: "e17", source: "n49", target: "n54"}},
{ data: { id: "e18", source: "n54", target: "n55"}},
{ data: { id: "e19", source: "n55", target: "n56"}},
{ data: { id: "e20", source: "n56", target: "n23"}},
{ data: { id: "e21", source: "n23", target: "n37"}},
{ data: { id: "e22", source: "n37", target: "n9"}},
{ data: { id: "e23", source: "n9", target: "n43"}},
{ data: { id: "e24", source: "n43", target: "n15"}},
{ data: { id: "e25", source: "n15", target: "n61"}},
{ data: { id: "e26", source: "n61", target: "n60"}},
{ data: { id: "e27", source: "n60", target: "n59"}},
{ data: { id: "e28", source: "n59", target: "n58"}},
{ data: { id: "e29", source: "n58", target: "n57"}},
{ data: { id: "e30", source: "n57", target: "n62"}},
{ data: { id: "e31", source: "n62", target: "n63"}},
{ data: { id: "e32", source: "n63", target: "n64"}},
{ data: { id: "e33", source: "n64", target: "n65"}},
{ data: { id: "e34", source: "n65", target: "n20"}},
{ data: { id: "e35", source: "n20", target: "n19"}},
{ data: { id: "e36", source: "n65", target: "n19"}},
{ data: { id: "e37", source: "n19", target: "n64"}},
{ data: { id: "e38", source: "n64", target: "n18"}},
{ data: { id: "e39", source: "n18", target: "n19"}},
{ data: { id: "e40", source: "n18", target: "n17"}},
{ data: { id: "e41", source: "n17", target: "n11"}},
{ data: { id: "e42", source: "n11", target: "n12"}},
{ data: { id: "e43", source: "n12", target: "n13"}},
{ data: { id: "e44", source: "n13", target: "n14"}},
{ data: { id: "e45", source: "n14", target: "n15"}},
{ data: { id: "e46", source: "n15", target: "n60"}},
{ data: { id: "e47", source: "n60", target: "n14"}},
{ data: { id: "e48", source: "n14", target: "n59"}},
{ data: { id: "e49", source: "n59", target: "n13"}},
{ data: { id: "e50", source: "n13", target: "n58"}},
{ data: { id: "e51", source: "n58", target: "n12"}},
{ data: { id: "e52", source: "n12", target: "n57"}},
{ data: { id: "e53", source: "n57", target: "n11"}},
{ data: { id: "e54", source: "n11", target: "n62"}},
{ data: { id: "e55", source: "n62", target: "n17"}},
{ data: { id: "e56", source: "n17", target: "n63"}},
{ data: { id: "e57", source: "n63", target: "n18"}},
{ data: { id: "e58", source: "n47", target: "n46"}},
{ data: { id: "e59", source: "n46", target: "n20"}},
{ data: { id: "e60", source: "n46", target: "n19"}},
{ data: { id: "e61", source: "n19", target: "n45"}},
{ data: { id: "e62", source: "n45", target: "n18"}},
{ data: { id: "e63", source: "n18", target: "n38"}},
{ data: { id: "e64", source: "n38", target: "n17"}},
{ data: { id: "e65", source: "n17", target: "n39"}},
{ data: { id: "e66", source: "n39", target: "n11"}},
{ data: { id: "e67", source: "n11", target: "n40"}},
{ data: { id: "e68", source: "n40", target: "n12"}},
{ data: { id: "e69", source: "n12", target: "n41"}},
{ data: { id: "e70", source: "n41", target: "n13"}},
{ data: { id: "e71", source: "n13", target: "n42"}},
{ data: { id: "e72", source: "n42", target: "n14"}},
{ data: { id: "e73", source: "n14", target: "n44"}},
{ data: { id: "e74", source: "n44", target: "n15"}},
{ data: { id: "e75", source: "n43", target: "n44"}},
{ data: { id: "e76", source: "n44", target: "n42"}},
{ data: { id: "e77", source: "n42", target: "n41"}},
{ data: { id: "e78", source: "n41", target: "n40"}},
{ data: { id: "e79", source: "n40", target: "n39"}},
{ data: { id: "e80", source: "n39", target: "n38"}},
{ data: { id: "e81", source: "n38", target: "n45"}},
{ data: { id: "e82", source: "n45", target: "n46"}},
{ data: { id: "e83", source: "n47", target: "n6"}},
{ data: { id: "e84", source: "n6", target: "n46"}},
{ data: { id: "e85", source: "n46", target: "n5"}},
{ data: { id: "e86", source: "n5", target: "n45"}},
{ data: { id: "e87", source: "n45", target: "n3"}},
{ data: { id: "e88", source: "n3", target: "n38"}},
{ data: { id: "e89", source: "n38", target: "n1"}},
{ data: { id: "e90", source: "n1", target: "n39"}},
{ data: { id: "e91", source: "n39", target: "n0"}},
{ data: { id: "e92", source: "n0", target: "n40"}},
{ data: { id: "e93", source: "n40", target: "n2"}},
{ data: { id: "e94", source: "n2", target: "n41"}},
{ data: { id: "e95", source: "n41", target: "n4"}},
{ data: { id: "e96", source: "n4", target: "n42"}},
{ data: { id: "e97", source: "n42", target: "n8"}},
{ data: { id: "e98", source: "n8", target: "n44"}},
{ data: { id: "e99", source: "n44", target: "n9"}},
{ data: { id: "e100", source: "n9", target: "n8"}},
{ data: { id: "e101", source: "n8", target: "n4"}},
{ data: { id: "e102", source: "n4", target: "n2"}},
{ data: { id: "e103", source: "n2", target: "n0"}},
{ data: { id: "e104", source: "n33", target: "n6"}},
{ data: { id: "e105", source: "n6", target: "n32"}},
{ data: { id: "e106", source: "n32", target: "n5"}},
{ data: { id: "e107", source: "n5", target: "n31"}},
{ data: { id: "e108", source: "n31", target: "n3"}},
{ data: { id: "e109", source: "n3", target: "n30"}},
{ data: { id: "e110", source: "n30", target: "n1"}},
{ data: { id: "e111", source: "n1", target: "n28"}},
{ data: { id: "e112", source: "n28", target: "n0"}},
{ data: { id: "e113", source: "n0", target: "n29"}},
{ data: { id: "e114", source: "n29", target: "n2"}},
{ data: { id: "e115", source: "n2", target: "n34"}},
{ data: { id: "e116", source: "n34", target: "n4"}},
{ data: { id: "e117", source: "n4", target: "n35"}},
{ data: { id: "e118", source: "n35", target: "n8"}},
{ data: { id: "e119", source: "n8", target: "n36"}},
{ data: { id: "e120", source: "n36", target: "n9"}},
{ data: { id: "e121", source: "n37", target: "n36"}},
{ data: { id: "e122", source: "n36", target: "n35"}},
{ data: { id: "e123", source: "n35", target: "n34"}},
{ data: { id: "e124", source: "n34", target: "n29"}},
{ data: { id: "e125", source: "n29", target: "n28"}},
{ data: { id: "e126", source: "n28", target: "n30"}},
{ data: { id: "e127", source: "n30", target: "n31"}},
{ data: { id: "e128", source: "n31", target: "n32"}},
{ data: { id: "e129", source: "n32", target: "n33"}},
{ data: { id: "e130", source: "n27", target: "n32"}},
{ data: { id: "e131", source: "n32", target: "n26"}},
{ data: { id: "e132", source: "n26", target: "n31"}},
{ data: { id: "e133", source: "n31", target: "n25"}},
{ data: { id: "e134", source: "n25", target: "n30"}},
{ data: { id: "e135", source: "n30", target: "n24"}},
{ data: { id: "e136", source: "n24", target: "n28"}},
{ data: { id: "e137", source: "n28", target: "n10"}},
{ data: { id: "e138", source: "n10", target: "n29"}},
{ data: { id: "e139", source: "n29", target: "n16"}},
{ data: { id: "e140", source: "n16", target: "n34"}},
{ data: { id: "e141", source: "n34", target: "n21"}},
{ data: { id: "e142", source: "n21", target: "n35"}},
{ data: { id: "e143", source: "n35", target: "n22"}},
{ data: { id: "e144", source: "n22", target: "n36"}},
{ data: { id: "e145", source: "n36", target: "n23"}},
{ data: { id: "e146", source: "n23", target: "n22"}},
{ data: { id: "e147", source: "n22", target: "n21"}},
{ data: { id: "e148", source: "n21", target: "n16"}},
{ data: { id: "e149", source: "n16", target: "n10"}},
{ data: { id: "e150", source: "n10", target: "n24"}},
{ data: { id: "e151", source: "n24", target: "n25"}},
{ data: { id: "e152", source: "n25", target: "n26"}},
{ data: { id: "e153", source: "n26", target: "n27"}},
{ data: { id: "e154", source: "n53", target: "n26"}},
{ data: { id: "e155", source: "n26", target: "n52"}},
{ data: { id: "e156", source: "n52", target: "n25"}},
{ data: { id: "e157", source: "n25", target: "n51"}},
{ data: { id: "e158", source: "n51", target: "n24"}},
{ data: { id: "e159", source: "n24", target: "n50"}},
{ data: { id: "e160", source: "n50", target: "n10"}},
{ data: { id: "e161", source: "n10", target: "n48"}},
{ data: { id: "e162", source: "n48", target: "n16"}},
{ data: { id: "e163", source: "n16", target: "n49"}},
{ data: { id: "e164", source: "n49", target: "n21"}},
{ data: { id: "e165", source: "n21", target: "n54"}},
{ data: { id: "e166", source: "n54", target: "n22"}},
{ data: { id: "e167", source: "n22", target: "n55"}},
{ data: { id: "e168", source: "n55", target: "n23"}}
]
};

var cy = cytoscape({
    container: document.getElementById("cy"),
    elements: elements,
    layout: { name: "preset" },
    autolock: true,
    autounselectify: true,
    style: `
    node {
      shape: ellipse;
      border-color: black;
      border-width: 5px;
      width: 50px;
      height: 25px;
    }
    edge {
    width: 4px;
    line-color: #bbb;
    line-style: dashed;}
    .live, .live-fixed {
    line-color: #000;
    line-style: solid;
    }
    .dead {
    line-color: #bbb;
    line-opacity: 0.1;
    }
    .enemy, .enemy-fixed {background-color: rgb(88, 47, 139)}
    .exp {background-color: gold;}
    .health {background-color: rgb(17, 100, 166);}
    #start, .boss { 
        background-fill: radial-gradient;
        background-gradient-stop-colors: #FBAABB #FBAABB #E52164;
        background-gradient-stop-positions: 0% 10% 90%
        } 
    .light { 
        background-fill: radial-gradient;
        background-gradient-stop-colors: #cc97e7 #cc97e7 #582f8b;
        background-gradient-stop-positions: 0% 10% 90%
        }
    .ideal{
    line-outline-color: red;
    outline-color: red;
    line-outline-width: 3px;
    outline-width: 3px;
    }

    .actual{
    line-outline-color: blue;
    outline-color: blue;
    line-outline-width: 3px;
    outline-width: 3px;
    }
            .used {
    line-outline-color: purple;
    outline-color: purple;
    line-outline-width: 3px;
    outline-width: 3px;
    }
    .current{
    label: ⚑;
    font-size: 2.5em;
    text-halign:center;
    text-valign:center;
    text-margin-x: 0.5em;
    text-outline-color: #FFF;
    text-margin-y: -1em;
    text-outline-width: 1px;
    z-index: 100;}
    `
  });

  var visited = ["start", "n66"];
  const toggle = document.getElementById("toggle");
  const used = document.getElementById("used");
  const move_text = " moves"

  cy.on("tap", "node", function(evt) {
    var node = evt.target;
    console.log(node.id());
    const nodeId = node.id();
    if (["n66", "start"].includes(nodeId)) {
        // Do nothing, these are fixed
    } else if(["n61", "n43", "n37", "n56"].includes(nodeId) && !node.hasClass('boss')) {
        cy.nodes(".boss").removeClass("boss");
        node.addClass("boss");
        actualPath();
        idealPath();
        colorPath();
    } else {
        if (toggle.checked) {
            visited.push(node.id());
            console.log(visited);
            actualPath();
            used.innerText = `${visited.length - 1}${move_text}`;
            colorPath();
        } else {
            cycleNode(node);
        }
    }
  } );

  cy.on("tap", "edge", function (evt) {
    var edge = evt.target;
    console.log(edge.id());
    if (["e0", "e1"].includes(edge.id())) {
        // Do nothing, these are fixed
    } else {
        if (edge.hasClass("live")) {
            edge.removeClass("live");
            edge.addClass("dead");
        } else if (edge.hasClass("dead")) {
            edge.removeClass("dead");
        } else {
            edge.addClass("live")
        }
        // Only recalc if we changed edges in the paths
        if (cy.$(".actual").contains(cy.$(edge))){
            actualPath();
        }

        if (cy.$(".ideal").contains(cy.$(edge))){
            idealPath();
        }
    }
  });

  document.getElementById("reset").addEventListener("click", () => { cy.fit()})
  document.getElementById("clear").addEventListener("click", () => { 
    cy.elements().removeClass("live dead enemy light health exp boss used ideal actual current");
    for (let item of ["actual", "ideal", "used"]) {
        document.getElementById(item).innerText = "";
    }
    
})
document.getElementById("undo").addEventListener("click", () => { 
    // Can't undo past fixed nodes
    if (visited.length > 2) {
        const bad = visited.pop();
        cy.$(`#${bad}`).removeClass("used");
        actualPath();
    }
})

  function cycleNode(el) {
    if (el.hasClass("enemy")) {
        el.removeClass("enemy");
        el.addClass("light");
    } else if (el.hasClass("light")) {
        el.removeClass("light");
        el.addClass("health");
    } else if (el.hasClass("health")) {
        el.removeClass("health");
        el.addClass("exp");
    } else if (el.hasClass("exp")) {
        el.removeClass("exp");
    } else {
        el.addClass("enemy");
    }
  }

  function idealPath() {
    pathCalculate("start", "ideal");
  }

  function actualPath() {
    var last = visited[visited.length - 1];
    pathCalculate(last, "actual");
    cy.$(".current").removeClass("current");
    cy.$(`#${last}`).addClass("current");
  }

  function pathCalculate(nodeId, highlightClass) {
    console.log(nodeId);
    const boss = cy.elements('.boss')[0];
    if(boss) {
        var aStar = cy.elements().difference('.dead').aStar({ root: `#${nodeId}`, goal: `#${boss.id()}` });
        cy.elements().removeClass(highlightClass);
        aStar.path.addClass(highlightClass);
        document.getElementById(highlightClass).innerText = `${aStar.distance}${move_text}`;
    }
  }

  function colorPath() {
    var prev = null;
    for (let node of visited) {
        var cyNode = cy.$(`#${node}`);
        cyNode.addClass("used")
        if (prev != null) {
            prev.edgesTo(cyNode).addClass("used");
            cyNode.edgesTo(prev).addClass("used");
        }
        prev = cyNode;
    }
  }