// This javascript file sets up the index page.

var originalNodeColor = "orange";
var activeNodeColor = "green";

var graph;

// var steps = ["n1", "n2", "n3", "n4", "n6", "n10"];
var steps = [ "n1", "n2", "n3", "n4", "n3", "n4", "n5", "n6", "n5", "n6", "n7", "n8", "n7", "n8", "n6", "n8", "n9", "n8", "n9", "n10", "n9", "n10", "n11", "n12", "n11", "n12", "n13", "n14", "n13", "n14", "n12", "n14", "n13", "n12", "n14", "n12", "n11", "n10", "n15", "n16", "n17", "n18", "n17", "n18", "n19" ];
var stepIndex = 0;

$(document).ready(function(){
    $("#graph").graphviz({
        url: "svg/hanoi_graph.svg",
        ready: function() {

            graph = this;

            init();

        }
    });
});

function init(){

    // activate the first node
    activateNode(steps[stepIndex]);

    // set action for Step button
    $("#step").click(step);

    // set action for Reset button
    $("#reset").click(reset);

}

function reset(){

    resetNode(steps[stepIndex]);
    stepIndex = 0;
    activateNode(steps[stepIndex]);

}

function step(){

    console.log("KAKA");

    if(stepIndex < steps.length - 1){

        resetNode(steps[stepIndex]);
        activateNode(steps[stepIndex+1]);
        stepIndex++;

    }

}

function resetNode(nodeId){
    $("#" + nodeId).find("ellipse").attr("fill", "orange");
}

function activateNode(nodeId){
    $("#" + nodeId).find("ellipse").attr("fill", "green");
}