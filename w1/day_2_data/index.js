// GOAL: can we draw a shape for every cup of coffee we drank this morning?

var w = 500;
var h = 500;
var radius = 20;
var margin = radius * 2;

var canvas = d3.select("svg")
				.attr("width",w)
				.attr("height",h);




// var dataPoint = [3];
// var circles = canvas.selectAll("circle")
// 					.data(dataPoint)
// 					.join("circle")
// 					.attr("r", radius)
// 					.attr("cx", w/2)
// 					.attr("cy", h/2);






// var moreData = [17,5,10];
// var circShape = canvas.selectAll("circle")
// 					.data(moreData) 
// 					.join("circle")
// 					.attr("r", radius)
// 					.attr("cx", w/2)
// 					.attr("cy", h/2);