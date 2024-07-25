var w = 1000;
var h = 500;
var rad = 20;
var leftMargin = rad * 2;
var imgW = rad * 4;
var imgH = rad * 4;

var svg = d3.select("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "black")


var data = [];
d3.json("alexander.json").then(function (jsonData) {
    data = jsonData;
    drawRadialLine();
});

////DRAW RADIAL LINE
var myPath;
var myText;
function drawRadialLine() {
    var monthly = d3.scaleLinear()
        .domain([1, 12 + 1]) // 🌶 we add 1, otherwise December is superposed with January
        .range([0, 2 * Math.PI])

    var scaleRadius = d3.scaleLinear()
        .domain([d3.min(data, d => d.sky), d3.max(data, d => d.sky)])
        .range([0, 270])

    radialLineMaker = d3.lineRadial()
        .angle(function (d) {
            return monthly(d.month)
        })
        .radius(d => scaleRadius(d.sky))
        .curve(d3.curveCatmullRomClosed);


    g = svg.append("g")
            .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')')

    g.selectAll("path")
        .data([2019,2020,2021])
        .join("path")
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", "0.2")
          .attr('marker-start', 'url(#dot)')
          .attr('marker-mid', 'url(#dot)')
          .attr('marker-end', 'url(#dot)')
        .attr("d", year => radialLineMaker(data.filter(d => d.year === year)));

    svg
        .append('defs')
        .append('marker')
        .attr('id', 'dot')
        .attr('viewBox', [0, 0, 20, 20])
        .attr('refX', 10)
        .attr('refY', 10)
        .attr('markerWidth', 10)
        .attr('markerHeight', 10)
        .append('circle')
        .attr('cx', 5)
        .attr('cy', 5)
        .attr('r', 10)
        .style('fill', 'pink');
}