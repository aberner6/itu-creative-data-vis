///our working file from class
//look into using grouping to organise and move elements around the canvas
//explore rotation + transform/translation in d3
//drive shapes rotation based on data


//set up
// var w = 1000;
// var h = 800;
var r = 100,
w = r * 6,
h = w;

var canvas = d3.select("#canvas").append("svg")
	.attr("width", w)
	.attr("height", h)
	.style("background-color","black");

//loading data
var skyData = [];
d3.json("skyData.json").then(function(data){
	skyData = data;
}).then(function(data){
	draw();
})

//drawing
function draw(){
	console.log(skyData)

	var margin = r*4;
	
	//set up mins and maxes of cloud cover
	var cloudCov = skyData.map(function(d){
		return d.cloudCov
	})
	var min = d3.min(cloudCov);
	var max = d3.max(cloudCov);
	console.log(min+" "+max)
	var skyScale = d3.scaleLinear()
		.domain([min, max])
		.range([2, 15])

	//pulling array of days for use in the xscale
	var days = skyData.map(function(d){
		return d.day;
	})
	var orderedDays = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
	console.log(days)
	//x scale that should position items left to right
	//according to weekday
	var xScale = d3.scaleBand()
					.domain(days)
					.range([margin, w-margin]);
	//y scale that should separate items into rows 
	//when they are from the following week
	var numColumns = 7;
	var maxRow = Math.floor(skyData.length/numColumns)
	var yScale = d3.scaleLinear()
					.domain([0,6])
					.range([h/4, h/2])
	// console.log(xAxis("sunday"))

	//i want to map every element in my dataset to an angle from 0 to 360
	var rotScale = d3.scaleLinear()
		.domain([0, skyData.length])
		.range([0, 360])

	var xc = w/2;
	var yc = h/2;
	//preparing spaces on the canvas that are in the x y positions
	var gElements = canvas.selectAll("anything")
							.data(skyData)
							.join("g")
							.attr("transform",function(d,i){
									var iScaled = rotScale(i)
									var x = Math.sin(iScaled * Math.PI/180) * r + xc - 10;  
									var y = Math.cos(iScaled * Math.PI/180) * r + yc - 10
							
									return 'translate('+ x +','+ y +')'
								// return "translate("+xScale(d.day)+","+yScale(Math.floor(i/numColumns))+")"
							})
	//on top of the g elements, we are adding a circle
	gElements.append("circle")
				.attr("cx",0)
				.attr("cy",0)
				.attr("r",function(d){
					return skyScale(d.cloudCov)
				})
				.attr("fill","white");


	// //make a scale that rotates the lines according to how much cloud cover is observed
	var rotationScale = d3.scaleLinear()
							.domain([min, max])
							.range([0, 360])
	// //on top of the g elements, let's add a line
	// //and let's rotate that line according to cloud cover data
	gElements.append("rect")
				.attr("width",1)
				.attr("height",10)
				.attr("x",0)
				.attr("y",0)
				.attr("transform",function(d){
					return "rotate("+rotationScale(d.cloudCov)+")"
				})
				.attr("stroke","blue")


	//on top of those spaces we will draw circles and other shapes						
// 	var circles = canvas.selectAll("circle")
// 					.data(skyData)
// 					.join("circle")
// 					.attr("class", function(d){
// 						return d.day
// 					})
// 					.attr("cx",function(d){
// 						return xAxis(d.day);
// 					})
// 					.attr("cy",function(d,i){
// 						console.log(Math.floor(i/7))
// 						return yScale(Math.floor(i/7))
// 					})
// 					.attr("r",r)
// 					.attr("fill","white")
}