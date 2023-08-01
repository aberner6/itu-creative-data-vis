var windowWidth = window.outerWidth,
    windowHeight = window.innerHeight;

var width = window.outerWidth,
    height = window.innerHeight;


var connLevels = [12, 12, 264, 209, 137, 77, 12]; //how far away from the center each level is

var p0 = [width / 2, height / 2, windowHeight];

var p1 = [width / 2 + connLevels[2], height / 2, 100];



var svg = d3.select("#container")
    .append("svg")
    .attr({
        "width": "100%",
        "height": "100%",
    });
svg.call(zoomIdentity);

var zoomIdentity = d3.zoom()
    .scale(1.0)
    .scaleExtent([1, 5])
    .on("zoom", function () {
        // var t = zoom.translateBy;
        // var s = zoom.scaleBy;
        var t = d3.zoomIdentity.translate;
        var s = d3.zoomIdentity.scale;
        // var t = d3.event.translate;
        // var s = d3.event.scale;
        zoomInOut(t, s);
    })


// var zoom = d3.zoom()
//   .on('zoom', handleZoom)
//   .scaleExtent([1, 5])
//   .translateExtent([[0, 0], [w, h]]);

// function handleZoom(e) {
//   d3.select('svg')
//     .attr('transform', e.transform);
// }
// function initZoom() {
//   d3.selectAll('svg')
//     .call(zoom);


svg.call(transition, p1, p2);

var vis = svg
    .append('svg:g')
    .attr("transform",
        "translate(" + 0 + "," + 0 + ")");

vis.selectAll('circle')
    .data(connLevels)
    .join('circle')
    .attr('cx', function(d,i){
        return i*10;
    })
    .attr('cy', height/2)
    .attr('r', function(d){
        return d*5;
    });

var zoomInOut = function (t, s) {
    vis.attr("transform",
        "translate(" + d3.event.translate + ")"
        + " scale(" + d3.event.scale + ")");
};