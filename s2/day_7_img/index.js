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
	"day":4,
	"img":"img1.jpeg"
	},
	{
	"day":14,
	"img":"img2.jpeg"
	},
	{
	"day":24,
	"img":"img3.jpeg"
	},
	{
		"day":4,
		"img":"img4.jpeg"
	},
	{
		"day":14,
		"img":"img5.jpeg"
	},
	{
		"day":24,
		"img":"img6.jpeg"
	}
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
//   .attr('class','labels')
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
