var w = 800;
var h = 800;
var rad = 20;
var imgSize = rad*8;
var margin = imgSize/2;
var svg = d3.select("#canvas").append("svg")
			.attr("width",w)
			.attr("height",h)
			.style("background-color","black")
var matrix = [
  [ 0,  1,  2,  3],
  [ 4,  5,  6,  7],
  [ 8,  9, 10, 11],
  [12, 13, 14, 15],
];

var columns = 4;
var squareSize = 50;
var size = columns * squareSize;

const scaleCol = d3.scaleLinear()
    .domain([0, columns])
    .range([margin, w-margin/2]);
var dataLength = 15;
const scaleRow = d3.scaleLinear()
    .domain([0, dataLength / columns])
    .range([margin, h-margin]);
var groups = svg.selectAll("g")
            .data(matrix)
            .join("g");
var circs =  groups.selectAll("circle")
            .data(function(d, i) { return d; }) // d is matrix[i]
            .join("circle")
            .attr("transform", (d)=>{
              //d is itself the index number in this case
              var x = d % columns;
              var y = Math.floor(d / columns);
              return `translate(${scaleCol(x)}, ${scaleRow(y)})`
            })
            .attr("cx",0)
            .attr("cy",0)
            .attr("r", 20)
            .attr("fill", "white")
















            // var shapes = svg.selectAll("path")
// 	.data(matrix)
//     .join("path")
// 	.attr("transform", function(d,i){
// 	return `translate(${xScale(i)},${h/2})`
// 	})
// 	.attr("fill", "pink")
//     .attr("d", d3.symbol().type(d3.symbolTriangle).size((d) => { return d })) 