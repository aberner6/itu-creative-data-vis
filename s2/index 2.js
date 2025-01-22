// 1. 2. Draw with your data: draw some circles of the sky 
// You collected some data yesterday. Maybe some numbers?  
// Put some of the data in an array, join the array to SVG shapes. 
// How to do that? Check back to [yesterday’s code](https://www.notion.so/f1d869c23e184c05b79c5d633315b365?pvs=21).
// How does the visual experience change when you use different shapes 
// and attributes to express the data? What is expressed if you use a square v. a circle, 
// if the data informs the radius v. the x position? Consider how your 
// data type aligns with your visual expression.

// canvas:
var w = 1500;
var h = 500;
var margin = 10; 

// create an svg canvas
var canvas = d3.select("#canvas")
				.append("svg")
				.attr("width", w)
				.attr("height", h)
				.style("background-color", "pink")

// var densityData = [7,1,1,1,1,1,4,1,1,1,1,1,1,1,2,8,1,1,10,3,3,1,5,7,1,2,5,10,4,7]
// var sizeData___ = [5,1,1,1,1,1,3,1,1,2,1,2,2,1,2,8,1,1,4,3,8,1,5,10,1,2,5,10,3,10]

var cloudData = [
	{density: 7, size:5},
	{density: 1, size: 1},
	{density: 1, size:1},
	{density:1, size:1},
	{density: 1, size:1},
	{density: 1, size: 1},
	{density: 4, size:3},
	{density:1, size:1},
	{density: 1, size:5},
	{density: 1, size: 3},
	{density: 1, size:1},
	{density:1, size:2},
	{density:1, size:2},
	{density: 2, size:2},
	{density: 8, size: 8},
	{density: 1, size:1},
	{density:1, size:1},
	{density:10, size:4},
	{density: 3, size:3},
	{density: 3, size: 8},
	{density: 1, size:1},
	{density:5, size:5},
	{density: 7, size:10},
	{density: 1, size: 1},
	{density: 5, size:5},
	{density:7, size:10},
	{density: 1, size:1},
	{density: 2, size: 2},
	{density: 5, size:5},
	{density:10, size:10},
	{density: 4, size:3},
	{density: 7, size: 10},
]


var cloudDataJoin = canvas.selectAll("circle")
					.data(cloudData)
					.join("circle")
					.attr("cx", function(d, i){
						return 35+(i*45) // 40 = POSITION VÆK fra hinanden
						// 400 = position frem og tilbage (x-aske), jo højere jo længere til højre  
					})
					.attr("cy", function(d){
						return 70+(d.density*20)
					}) // 400 = position op og ned (jo højere, jo længere ned
					.attr("r", function(d){
						return d.size*4
					})
					.attr("fill", "beige")
					.attr("stroke", "blue")









var w = 1000;
var h = 700;
var shapeSize = 10;
var margin = shapeSize*4; // relate shape size to margin

// create canvas
var svg = d3.select("#canvas").append("svg")
			.attr("width",w)
			.attr("height",h)
			.style("background-color","black")


// create array of data
var skyData = [0, 30, 40, 70, 30, 50, 60];


// find the minimum and maximum of the array of data
var minSky = d3.min(skyData);
var maxSky = d3.max(skyData);

// make a scale so that each piece of data is places agress the x-axis of the canvas with quael spacing in between
var xScale = d3.scaleLinear() // declare a linear scale function
			.domain([minSky, maxSky]) // input
			.range([0, w]); // output


// make a circle for every datapoint
// spread the circles along the x-axis using the xScale
var circles = svg.selectAll("circle")
				.data(skyData)
				.join("circle")
				.attr("cx", function(d){
					return xScale(d);
				})
				.attr("cy",h/2)
				.attr("r", 10)
				.attr("fill", "white")







// SCALE CODE

var w = 1000;
var h = 700;
var shapeSize = 10;
var margin = shapeSize*4; // relate shape size to margin

// create canvas
var svg = d3.select("#canvas").append("svg")
			.attr("width",w)
			.attr("height",h)
			.style("background-color","black")


// create array of data
var skyData = [0, 30, 40, 70, 30, 50, 60];


// find the minimum and maximum of the array of data
var minSky = d3.min(skyData);
var maxSky = d3.max(skyData);

// make a scale so that each piece of data is places agress the x-axis of the canvas with quael spacing in between
var xScale = d3.scaleLinear() // declare a linear scale function
			.domain([minSky, maxSky]) // input
			.range([0, w]); // output


// make a circle for every datapoint
// spread the circles along the x-axis using the xScale
var circles = svg.selectAll("circle")
				.data(skyData)
				.join("circle")
				.attr("cx", function(d){
					return xScale(d);
				})
				.attr("cy",h/2)
				.attr("r", 10)
				.attr("fill", "white")