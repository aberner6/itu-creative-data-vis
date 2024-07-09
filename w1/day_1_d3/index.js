//GOAL: can we set up a local coding environment, webpage and draw 1 shape on it?

var w = 500;
var h = 500;

var canvas = d3.select("#myVis")
       .append("svg")
       .attr("width",w)
       .attr("height",h)
       .style("background-color","blue");

canvas.append("circle")
       .attr("cx", w/2)
       .attr("cy", h/2)
       .attr("r", 50)
       .attr("fill","white")














































// var width = 800;
// var height = 500;
// var xPos = width/2;
// var yPos = height/2;
// var rad = 10;


// var canvas = d3.select("#myVis")
//                 .append("svg")
//                 .attr("width", width)
//                 .attr("height", height);

//  var circleFromD3 = canvas.append("circle")
//         .attr("cx", xPos)
//         .attr("cy", yPos)
//         .attr("r", rad)
//         .attr("fill","red");










































// var w = 500;
// var h = 500;
// var rad = 20;

// var svg = d3.select("svg")
// 			.attr("width",w)
// 			.attr("height",h);

// var circles = d3.selectAll("circle")
// 				.attr("r", rad)
// 				.attr("cx", w/2)
// 				.attr("cy", h/2);