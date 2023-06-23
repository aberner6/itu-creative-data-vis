var slowSpeed = 5;
var fastSpeed = 28;
var walker = 100;
var cyclist = 200;

var svg = d3.select("svg")
	.attr("width",1000)
	.attr("height",800)



svg.append("line")
	.attr("x1", walker)
	.attr("x2", walker+fastSpeed)
	.attr("y1", cyclist)
	.attr("y2", cyclist)
	.attr("stroke", "black")
for(var i = 0; i<4; i++){
	svg.append("line")
		.attr("x1", walker)
		.attr("x2", walker+slowSpeed)
		.attr("y1", walker*i)
		.attr("y2", walker*i)
		.attr("stroke", "black")
}















































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