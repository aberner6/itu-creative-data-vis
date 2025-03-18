var w = 1800;
var h = 800;
var rad = 20;
var imgSize = rad*8;
var margin = imgSize/2;
var svg = d3.select("#canvas").append("svg")
			.attr("width",w)
			.attr("height",h)
			.style("background-color","black")

// ////1. JUST SHOW IMAGE
// var img = svg.append('image')
//     .attr('x', w/2-imgSize)
//     .attr('y', h/2)
//     .attr('width', imgSize*2)
//     .attr('height', imgSize*2)
// 	.attr("xlink:href", "img1.jpeg")

// var img2 = svg.append('image')
//     .attr('x', w/4)
//     .attr('y', h/2)
//     .attr('width', imgSize*2)
//     .attr('height', imgSize*2)
// 	.attr("xlink:href", "img2.jpeg")

////2. IMAGES CAN BE CONTAINED IN DATASETS
var imgData = [
	{
	"day":1,
	"img":"img1.jpeg",
	"cat":d3.symbolTriangle
	},
	{
	"day":2,
	"img":"img2.jpeg",
	"cat":d3.symbolSquare
	},
];

var xScale = d3.scaleLinear()
	.domain([0, imgData.length-1])
	.range([margin, w-margin*2])

var images = svg.selectAll("anything")
	.data(imgData)
	.join("image")
	.attr("x", function(d,i){
		return xScale(i)
	})
	.attr("y", h/2)
	.attr("width", imgSize)
	.attr("height", imgSize)
	// .attr("opacity", .5)
	.attr("xlink:href", function(d,i){
		return d.img;
	})


var labels = svg.selectAll('anything')
  .data(imgData)
  .join('text')
  .attr('class','labels')
  .attr('x', function(d,i){
    return xScale(i);
  })
  .attr('y', h/2+imgSize+40)
  .text(function(d){
	return d.day;
  })
  .style('font-family','ABC Whyte Unlicensed Trial')
  .style('font-size','48px')
  .attr('fill','white')

// var triangle = d3.symbol().type("triangle-up")();
// var triangle = d3.symbol().type(d3.symbolTriangle).size(500)
// var symbol = d3.symbol().type(d3.symbolCross);
// const shape = d3.scaleOrdinal(imgData.map(d => d.day), d3.symbols.map(s => d3.symbol().type(s)()));
var shapes = svg.selectAll("path")
	.data(imgData)
    .join("path")
	.attr("transform", function(d,i){
	return `translate(${xScale(i)},${h/2})`
	})
	.attr("fill", "pink")
	// .attr("d", d3.symbol().type(d3.symbolTriangle));
    .attr("d", d3.symbol().type((d) => { return d.cat }).size(30)) 



	  /////SOMETHING ELSE
// var minDay = d3.min(imgData, function(d){
// 	return d.day;
// })
// var maxDay = d3.max(imgData, function(d){
// 	return d.day;
// })
// var dayScale = d3.scaleLinear()
// 	.domain([minDay, maxDay])
// 	.range([imgSize, w-imgSize*2])

// d3.select('svg')
//     .selectAll('image')
//     .data(imgData)
//     .join('image')
//     .attr('x', function(d){
//     	return dayScale(d.day);
//     })
//     .attr('y', h/2)
//     .attr('width', imgSize)
//     .attr('height', imgSize)
// 	.attr("xlink:href", function(d){
// 		return d.img;
// 	})
